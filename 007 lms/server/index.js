const express = require('express');
require('dotenv').config();
const masterRouter = require('./src/app');
const cors = require('cors');
require('./src/config/db.config');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static('./public/uploads'));
app.use('/api', masterRouter);

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
})