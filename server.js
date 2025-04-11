import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/db.js';

// Import Routes
import authRoutes from './routes/authRoutes.js';
import salonRoutes from './routes/salonRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import barberRoutes from './routes/barberRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/salons', salonRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/barbers', barberRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

// Sync Database & Start Server
db.sync({ force: true })
 // Keeps existing data, modifies tables safely
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('❌ Database connection failed:', error);
    process.exit(1); // Exit the app if database connection fails
  });
