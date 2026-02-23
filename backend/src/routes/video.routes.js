const express = require('express');
const router = express.Router();
const controller = require('../controllers/video.controller');

router.post('/', controller.createVideo);
router.get('/', controller.getVideos);
router.get('/:id', controller.getVideoById);
router.put('/:id', controller.updateVideo);
router.delete('/:id', controller.deleteVideo);

module.exports = router;
