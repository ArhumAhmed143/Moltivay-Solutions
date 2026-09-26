import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';

// Load environment variables (Brevo & MongoDB configuration)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/moltivay';

// Middleware
app.use(
  cors({
    origin: '*', // Allow all origins for dev / configure for production domain
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('✅ [MongoDB] Successfully connected to database');
  } catch (error) {
    console.error('⚠️ [MongoDB] Connection warning:', error.message);
    console.log('ℹ️ [MongoDB] The API server will continue running. Ensure MongoDB daemon is running locally or specify a valid MongoDB Atlas URI in backend/.env');
  }
};

connectDB();

// Mount Routes
app.use('/api/contact', contactRoutes);

// Root and health route
app.get('/', (req, res) => {
  res.json({
    message: 'Moltivay Solutions API Server',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      contact: 'POST /api/contact',
      health: 'GET /api/contact/health',
    },
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 [Server] Moltivay Solutions backend running on http://localhost:${PORT}`);
  console.log(`📡 [Contact API] Available at http://localhost:${PORT}/api/contact`);
});
