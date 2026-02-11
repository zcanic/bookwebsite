import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { paths } from '../utils/fileUtils.js';

const router = express.Router();

// GET chapter list
router.get('/', async (req, res) => {
  try {
    // In a real scenario, we might scan the directory
    // For now, let's look for files in the data/chapters dir
    try {
        const files = await fs.readdir(paths.chapters);
        const mdFiles = files.filter(f => f.endsWith('.md')).sort();

        const chapterList = mdFiles.map(filename => ({
            id: filename,
            title: filename.replace('.md', '').replace(/_/g, ' '),
            path: `/api/chapters/${filename}`
        }));

        res.json(chapterList);
    } catch (e) {
        // Fallback if directory doesn't exist yet
        res.json([]);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to load chapters' });
  }
});

// GET chapter content
router.get('/:filename', async (req, res) => {
  try {
    const { filename } = req.params;

    // Basic Path Traversal Protection
    if (filename.includes('..') || filename.includes('/') || !filename.endsWith('.md')) {
        return res.status(400).json({ error: 'Invalid filename' });
    }

    const filePath = path.join(paths.chapters, filename);
    const content = await fs.readFile(filePath, 'utf-8');

    res.send(content); // Send raw markdown
  } catch (error) {
    if (error.code === 'ENOENT') {
        res.status(404).json({ error: 'Chapter not found' });
    } else {
        res.status(500).json({ error: 'Failed to read chapter' });
    }
  }
});

export default router;
