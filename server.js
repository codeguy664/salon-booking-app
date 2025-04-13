import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Path setup for ESM modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Enable CORS for all origins (during development)
app.use(cors());

// Middleware
app.use(express.json());

// Serve static files (frontend folder)
app.use(express.static(path.join(__dirname, 'frontend')));

// Your routes (e.g. API)
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);

// Fallback route to handle browser navigation (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
