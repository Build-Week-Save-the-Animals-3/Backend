const express = require('express');
const helmet = require('helmet');

const server = express();
const port = process.env.PORT || 8080;

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Save The Animals API'
  })
});

server.get('/')

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