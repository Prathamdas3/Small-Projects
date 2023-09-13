import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes/todo.js';
import noteRoutes from './routes/notes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/todo', todoRoutes);
app.use('/note', noteRoutes);

app.get('/', async (req, res) => {
  res.send('welcome to our api');
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port http://localhost:${PORT}`);
});
