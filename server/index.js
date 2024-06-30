const express = require('express');
const bodyParser = require('body-parser');
const videoApi = require('./api/video'); // Example API module
const tiktokApi = require('./api/tiktok'); // Example API module
// Import other API modules as needed

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Example routes for APIs
app.use('/api/video', videoApi);
app.use('/api/tiktok', tiktokApi);
// Add routes for other APIs as needed

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
