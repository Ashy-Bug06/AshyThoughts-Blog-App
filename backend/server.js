require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/posts');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Base route for posts
app.use('/api/posts', postsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`💫 Ashy Thoughts backend running on port ${PORT}`));
