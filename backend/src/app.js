const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const videoRoutes = require('./routes/video.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.use(errorMiddleware);

module.exports = app;
