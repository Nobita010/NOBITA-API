const express = require('express');
const router = express.Router();

// Predefined list of video URLs
const videoUrls = [
    "https://i.imgur.com/tKv3osp.mp4",
    "https://i.imgur.com/FZujE0A.mp4",
    "https://i.imgur.com/JlL0UQQ.mp4",
    // Add more video URLs as needed
];

// Route handler for GET /api/video
router.get('/', (req, res) => {
    // Generate a random index to pick a video URL from the list
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    const randomVideoUrl = videoUrls[randomIndex];

    // Respond with JSON containing the random video URL
    res.json({ videoUrl: randomVideoUrl });
});

module.exports = router;
