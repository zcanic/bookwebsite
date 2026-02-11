import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define data paths
const DATA_DIR = path.join(__dirname, '../../data');
const ANNOTATIONS_FILE = path.join(DATA_DIR, 'annotations.json');
const CHAPTERS_DIR = path.join(DATA_DIR, 'chapters');

// Ensure data directory exists
const ensureDataDir = async () => {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
};

// Safe JSON read
export const readJson = async (filePath, defaultValue = []) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') return defaultValue;
    throw error;
  }
};

// Safe JSON write
export const writeJson = async (filePath, data) => {
  await ensureDataDir();
  // Write to temp file first then rename for atomicity
  const tempPath = `${filePath}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(data, null, 2), 'utf-8');
  await fs.rename(tempPath, filePath);
};

export const paths = {
  annotations: ANNOTATIONS_FILE,
  chapters: CHAPTERS_DIR
};
