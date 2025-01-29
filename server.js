const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files (CSS, JS)

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Set the views directory

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// Contact route
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Form submission route
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  res.render('thankyou', { name, email, message });
});

// Start server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

