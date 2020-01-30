const express = require('express');

const server = express();
const port = process.env.PORT || 8080;

server.use(express.json());

server.get('/', (req, res, next) => {
  res.json({
    message: 'Welcome to Save The Animals API'
  })
});

server.use((err, req, res, next) => {
  console.log('Error:', err)
  res.status(500).json({
    message: 'Something went wrong'
  })
});

server.listen(port, () => {
  console.log(`\n*** Server is running http://localhost:${port} \n`)
});

module.exports = server;