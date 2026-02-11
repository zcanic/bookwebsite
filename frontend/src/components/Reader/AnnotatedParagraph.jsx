import React, { useMemo } from 'react';

/**
 * Utility to split text content based on annotation ranges.
 * This is the core of the "React-driven" rendering approach.
 *
 * @param {string} text - The raw text content
 * @param {Array} annotations - Annotations that apply to this text
 * @param {number} baseOffset - The global start offset of this text chunk in the paragraph
 * @returns {Array} - Array of React nodes (spans or strings)
 */
const splitText = (text, annotations, baseOffset) => {
  if (!text) return null;
  if (!annotations || annotations.length === 0) return text;

  const length = text.length;
  const endOffset = baseOffset + length;
  const parts = [];
  let currentIndex = 0; // Relative to text start (0 to length)

  // Filter annotations that intersect with this text chunk
  const relevantAnnotations = annotations.filter(a =>
    (a.startOffset < endOffset && a.endOffset > baseOffset)
  ).sort((a, b) => a.startOffset - b.startOffset); // Sort by start

  if (relevantAnnotations.length === 0) return text;

  // We need to handle potential overlaps. For simplicity V1, we assume flat highlighting
  // or simple nesting. A flat "points of interest" approach is robust.

  // Create a set of "cut points" relative to this text chunk
  const points = new Set([0, length]);
  relevantAnnotations.forEach(a => {
    const start = Math.max(0, a.startOffset - baseOffset);
    const end = Math.min(length, a.endOffset - baseOffset);
    if (start < length) points.add(start);
    if (end > 0) points.add(end);
  });

  const sortedPoints = Array.from(points).sort((a, b) => a - b);

  for (let i = 0; i < sortedPoints.length - 1; i++) {
    const start = sortedPoints[i];
    const end = sortedPoints[i + 1];
    const chunkText = text.slice(start, end);
    const chunkGlobalStart = baseOffset + start;
    const chunkGlobalEnd = baseOffset + end;

    // Find all annotations covering this chunk
    const activeAnns = relevantAnnotations.filter(a =>
      a.startOffset <= chunkGlobalStart && a.endOffset >= chunkGlobalEnd
    );

    if (activeAnns.length > 0) {
      // Apply the first annotation found (or merge styles if we wanted to support overlap)
      // For now, priority to the last one (visually on top) or first? Let's use first match.
      const ann = activeAnns[0];
      const className = ann.type === 'highlight'
        ? 'bg-yellow-200 dark:bg-yellow-600/40 rounded-sm cursor-pointer annotation-mark'
        : 'underline decoration-2 decoration-red-500 dark:decoration-red-400 underline-offset-2 cursor-pointer annotation-mark';

      parts.push(
        <span
          key={`${baseOffset}-${start}`}
          className={className}
          data-id={ann.id}
        >
          {chunkText}
        </span>
      );
    } else {
      parts.push(chunkText);
    }
  }

  return parts;
};

/**
 * Recursive function to traverse ReactMarkdown children and inject highlights.
 *
 * @param {React.Node} node - The current React node
 * @param {Array} annotations - All annotations for the paragraph
 * @param {Object} context - Mutable context to track global text offset
 * @returns {React.Node} - The transformed node
 */
const processNode = (node, annotations, context) => {
  if (typeof node === 'string') {
    const content = node;
    const currentOffset = context.offset;
    context.offset += content.length;
    return splitText(content, annotations, currentOffset);
  }

  if (Array.isArray(node)) {
    return node.map((child, i) =>
      <React.Fragment key={i}>
        {processNode(child, annotations, context)}
      </React.Fragment>
    );
  }

  if (React.isValidElement(node)) {
    // If it's a React element (like <strong>, <em>), recurse into its children
    const children = processNode(node.props.children, annotations, context);
    return React.cloneElement(node, { ...node.props, key: context.offset }, children); // Add key to force update if needed?
  }

  return node;
};

/**
 * 自定义 memo 比较函数
 * 只有当 annotations 实际发生变化时才重新渲染
 */
const arePropsEqual = (prevProps, nextProps) => {
  // paraIndex 变化必须重渲染
  if (prevProps.paraIndex !== nextProps.paraIndex) return false;
  
  // 比较 annotations 数组
  const prevAnns = prevProps.annotations || [];
  const nextAnns = nextProps.annotations || [];
  
  // 长度不同
  if (prevAnns.length !== nextAnns.length) return false;
  
  // 比较每个 annotation 的 id（假设 id 相同则内容相同）
  for (let i = 0; i < prevAnns.length; i++) {
    if (prevAnns[i].id !== nextAnns[i].id) return false;
  }
  
  // children 我们不能深度比较，但如果 annotations 没变，children 变化通常是由于重渲染
  // 这里我们选择信任 React 的虚拟 DOM 比较
  
  return true;
};

const AnnotatedParagraphInner = ({ children, annotations, paraIndex, ...props }) => {
  // We need to re-calculate the view whenever children or annotations change
  const content = useMemo(() => {
    // Context to track the running character count across all children
    const context = { offset: 0 };
    return processNode(children, annotations, context);
  }, [children, annotations]);

  return (
    <p
      id={`para-${paraIndex}`}
      className="mb-4 text-justify leading-relaxed relative"
      data-para-index={paraIndex}
      {...props}
    >
      {content}
    </p>
  );
};

export const AnnotatedParagraph = React.memo(AnnotatedParagraphInner, arePropsEqual);
