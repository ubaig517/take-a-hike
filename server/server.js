require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

const trailRoutes = require('./routes/trailRoutes');

connectDB();

app.use(express.json());

app.use('/api/trails', trailRoutes);

// catch-all route handler for any requests to an unknown route
app.use('*' ,(req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// global expres error handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));