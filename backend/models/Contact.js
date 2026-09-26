import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your full name'],
    trim: true,
    maxlength: [120, 'Name must be 120 characters or fewer'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    trim: true,
    lowercase: true,
    maxlength: [254, 'Email address is too long'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  subject: {
    type: String,
    trim: true,
    default: 'General Inquiry',
    maxlength: [200, 'Subject must be 200 characters or fewer'],
  },
  message: {
    type: String,
    required: [true, 'Please enter your message'],
    trim: true,
    maxlength: [5000, 'Message must be 5,000 characters or fewer'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
