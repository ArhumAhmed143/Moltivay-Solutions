import express from 'express';
import Contact from '../models/Contact.js';
import { sendContactNotification } from '../services/brevoService.js';
import mongoose from 'mongoose';

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Submit a new contact inquiry, persist to MongoDB, send email via Brevo
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Step a: Validation
    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Name is required.',
      });
    }

    if (name.trim().length > 120) {
      return res.status(400).json({ success: false, error: 'Name must be 120 characters or fewer.' });
    }

    if (typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Email address is required.',
      });
    }

    if (email.trim().length > 254) {
      return res.status(400).json({ success: false, error: 'Email address is too long.' });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    if (typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Message is required.',
      });
    }

    if (message.trim().length > 5000) {
      return res.status(400).json({ success: false, error: 'Message must be 5,000 characters or fewer.' });
    }

    if (subject != null && (typeof subject !== 'string' || subject.trim().length > 200)) {
      return res.status(400).json({ success: false, error: 'Subject must be 200 characters or fewer.' });
    }

    // Step b: Save to MongoDB
    let savedContact = null;
    if (mongoose.connection.readyState === 1) {
      try {
        const newContact = new Contact({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          subject: (subject && subject.trim()) || 'General Inquiry',
          message: message.trim(),
        });
        savedContact = await newContact.save();
        console.log('[Contact Route] Saved contact entry to MongoDB:', savedContact._id);
      } catch (dbErr) {
        console.error('[Contact Route] Error saving to MongoDB:', dbErr.message);
        // Continue to Brevo step even if DB write encounters issue in dev, but log it
      }
    } else {
      console.warn(
        '[Contact Route] MongoDB not connected (readyState != 1). Proceeding with email notification.'
      );
    }

    // Step c: Call Brevo API to send email to admin
    try {
      const emailResult = await sendContactNotification({
        name: name.trim(),
        email: email.trim(),
        subject: (subject && subject.trim()) || 'New Website Inquiry',
        message: message.trim(),
      });

      if (!emailResult.success || emailResult.simulated) {
        return res.status(503).json({
          success: false,
          error: 'Email delivery is not configured. Please contact us directly by email or WhatsApp.',
        });
      }
    } catch (brevoErr) {
      console.error('[Contact Route] Brevo notification warning:', brevoErr.message);
      return res.status(502).json({
        success: false,
        error: 'We could not deliver your inquiry. Please try again or contact us directly by email or WhatsApp.',
      });
    }

    // Step d: Return { success: true }
    return res.status(200).json({
      success: true,
      message: 'Thank you. Your inquiry was delivered to our project team. We will follow up using the email address you provided.',
      data: {
        id: savedContact ? savedContact._id : null,
        emailSent: true,
      },
    });
  } catch (error) {
    console.error('[Contact Route] Unexpected error handling submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please try again.',
    });
  }
});

/**
 * @route   GET /api/contact/health
 * @desc    Check contact service and database status
 * @access  Public
 */
router.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  const brevoConfigured = Boolean(
    process.env.BREVO_API_KEY && !process.env.BREVO_API_KEY.includes('xxxxxxxx')
  );

  res.json({
    status: 'ok',
    database: dbStatus,
    brevoConfigured,
    adminEmail: process.env.ADMIN_EMAIL || 'configured on demand',
  });
});

export default router;
