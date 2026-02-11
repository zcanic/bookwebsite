const API_BASE = '/book/api';

export const api = {
  // Annotations
  getAnnotations: async () => {
    const res = await fetch(`${API_BASE}/annotations`);
    if (!res.ok) throw new Error('Failed to fetch annotations');
    return res.json();
  },

  saveAnnotations: async (annotations) => {
    const res = await fetch(`${API_BASE}/annotations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(annotations)
    });
    if (!res.ok) throw new Error('Failed to save annotations');
    return res.json();
  },

  // Chapters
  getChapters: async () => {
    const res = await fetch(`${API_BASE}/chapters`);
    if (!res.ok) throw new Error('Failed to fetch chapters');
    return res.json();
  },

  getChapterContent: async (filename) => {
    const res = await fetch(`${API_BASE}/chapters/${filename}`);
    if (!res.ok) throw new Error('Failed to fetch chapter content');
    return res.text();
  }
};
