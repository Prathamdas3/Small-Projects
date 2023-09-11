import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todo.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/todo', todoRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port http://localhost:${PORT}`);
});
