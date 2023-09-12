import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todo.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/todo', todoRoutes);

app.get('/', async (req, res) => {
  res.send('welcome to our api');
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port http://localhost:${PORT}`);
});
