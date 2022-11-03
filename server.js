const express = require('express');
const PORT = process.env.PORT || 3000;
const server = express();
const rootRouter = require('./routes');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static('public'));
server.use('/api', rootRouter);

server.listen(PORT, ()=>{console.log(`Listening on port PORT {PORT}`)});