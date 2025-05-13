import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log path to check correctness
console.log('Serving static from:', path.join(__dirname, 'frontend'));

// Serve static files
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve index.html manually
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'frontend', 'login.html');
  console.log('Trying to serve:', filePath);
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
