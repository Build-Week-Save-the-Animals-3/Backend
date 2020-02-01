const express = require('express');
const helmet = require('helmet');
const campRouter = require('./campaigns/campaigns-router');

const server = express();
const port = process.env.PORT || 8080;

server.use(helmet());
server.use(express.json());
server.use('/api', campRouter);

server.get('/', (req, res) => {
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

if (!module.parent) {
  server.listen(port, () => {
    console.log(`\n*** Server is running http://localhost:${port} \n`)
  });
};

module.exports = server;