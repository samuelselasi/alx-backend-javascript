// module containing endpoint that returns welcome message on express server
const express = require('express');

const app = express();
const port = 7865;

app.get('/', (_, message) => {
  message.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;

  res.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
