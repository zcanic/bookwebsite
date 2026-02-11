import express from 'express';
import { readJson, writeJson, paths } from '../utils/fileUtils.js';

const router = express.Router();

// GET all annotations
router.get('/', async (req, res) => {
  try {
    const data = await readJson(paths.annotations, { annotations: [] });
    // Handle both array format (legacy) and object format (new)
    const annotations = Array.isArray(data) ? data : (data.annotations || []);
    res.json(annotations);
  } catch (error) {
    console.error('Failed to read annotations:', error);
    res.status(500).json({ error: 'Failed to load annotations' });
  }
});

// POST (Sync/Batch Save)
// This is a simplified "overwrite" strategy for now, matching the original python behavior
// ideally we would implement the merging logic discussed in the design doc
router.post('/', async (req, res) => {
  try {
    const newAnnotations = req.body;

    if (!Array.isArray(newAnnotations)) {
        return res.status(400).json({ error: 'Invalid format: expected array of annotations' });
    }

    // Save to disk
    await writeJson(paths.annotations, {
        version: "1.0",
        lastModified: new Date().toISOString(),
        annotations: newAnnotations
    });

    res.json({ success: true, count: newAnnotations.length });
  } catch (error) {
    console.error('Failed to save annotations:', error);
    res.status(500).json({ error: 'Failed to save annotations' });
  }
});

export default router;
