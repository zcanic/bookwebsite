/**
 * Calculates the exact text offsets and paragraph index for a selection.
 * Revised for the React-driven rendering approach.
 */
export const getSelectionInfo = (range) => {
  if (!range || range.collapsed) return null;

  // 1. Validate and Find Parent Paragraph
  let container = range.commonAncestorContainer;
  let paragraph = null;

  if (container.nodeType === Node.TEXT_NODE) {
    container = container.parentNode;
  }

  // Traverse up to find the paragraph container
  // We look for [data-para-index]
  while (container && container !== document.body) {
    if (container.hasAttribute?.('data-para-index')) {
      paragraph = container;
      break;
    }
    container = container.parentNode;
  }

  if (!paragraph) {
    console.debug("Selection outside AnnotatedParagraph");
    return null;
  }

  const paraIndex = parseInt(paragraph.dataset.paraIndex, 10);

  // 2. Calculate Start Offset
  // Strategy: Create a Range from the start of the paragraph to the start of the selection.
  // The .toString().length of this range is our precise character offset.
  // This works regardless of how many <span> tags React put in between.
  try {
    const preSelectionRange = document.createRange();
    preSelectionRange.selectNodeContents(paragraph);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const startOffset = preSelectionRange.toString().length;

    const text = range.toString();
    const endOffset = startOffset + text.length;

    // Sanity check
    if (startOffset < 0) return null;

    return {
      paraIndex,
      startOffset,
      endOffset,
      text
    };
  } catch (e) {
    console.error("Offset calc failed", e);
    return null;
  }
};
