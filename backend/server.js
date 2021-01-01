const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Server is Running');
});

app.listen(5000);