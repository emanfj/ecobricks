// server/routes/index.js
import express from 'express';

const router = express.Router();

// Landing Page Route
router.get('/', (req, res) => {
  res.send('Welcome to the landing page!');
});

// About Page Route
router.get('/about', (req, res) => {
  res.send('Welcome to the about page!');
});

export default router;
