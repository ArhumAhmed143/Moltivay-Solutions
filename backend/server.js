import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { rateLimit } from 'express-rate-limit';
import contactRoutes from './routes/contact.js';

// Load environment variables (Brevo & MongoDB configuration)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/moltivay';
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
  : ['http://localhost:5173', 'http://127.0.0.1:5173'];

if (process.env.TRUST_PROXY === 'true') {
  app.set('trust proxy', 1);
}

// Middleware
app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true, limit: '20kb' }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many inquiries were submitted. Please try again in 15 minutes.',
  },
});

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
app.use('/api/contact', contactLimiter, contactRoutes);

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
