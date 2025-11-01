const db = require('../db/connect');
const { Parser } = require('json2csv');

exports.getAllPosts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching thoughts' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Thought not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching thought' });
  }
};

exports.createPost = async (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content)
    return res.status(400).json({ error: 'Title and content are required' });

  try {
    const [result] = await db.query(
      'INSERT INTO posts (title, content, author) VALUES (?, ?, ?)',
      [title, content, author]
    );
    const [newPost] = await db.query('SELECT * FROM posts WHERE id = ?', [result.insertId]);
    res.status(201).json(newPost[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error creating thought' });
  }
};

exports.updatePost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    await db.query('UPDATE posts SET title=?, content=?, author=? WHERE id=?', [
      title,
      content,
      author,
      req.params.id,
    ]);
    const [updated] = await db.query('SELECT * FROM posts WHERE id=?', [req.params.id]);
    res.json(updated[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error updating thought' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await db.query('DELETE FROM posts WHERE id=?', [req.params.id]);
    res.json({ message: 'Thought removed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting thought' });
  }
};

exports.exportCSV = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT title, author, created_at FROM posts');
    const parser = new Parser({ fields: ['title', 'author', 'created_at'] });
    const csv = parser.parse(rows);

    res.header('Content-Type', 'text/csv');
    res.attachment('ashy_thoughts.csv');
    res.send(csv);
  } catch (err) {
    res.status(500).json({ error: 'Error exporting CSV' });
  }
};
