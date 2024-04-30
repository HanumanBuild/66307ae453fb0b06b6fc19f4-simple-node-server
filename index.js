const express = require('express');
const app = express();

// Define the port to run the server on
const PORT = process.env.PORT || 3000;

// Handle GET request to the root URL
app.get('/', (req, res) => {
  res.send('hello world');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});