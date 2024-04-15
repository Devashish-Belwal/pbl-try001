const express = require('express');
const cors = require('cors');

//  const dishStaticRouter = require("./routes/dishes.router.js"); 

const TeamData = require ("./data/TD");

const app = express();

app.use(cors());

const port = 8000;

app.use(express.json());

app.get('/', (req, res) => res.send('Server is working !' + port));

// app.use('/api/dishes' , dishStaticRouter);

app.get('/api/dishes',(req,res) =>  res.json(TeamData.data));

app.listen(port, () => console.log(`Food app is listening on port ${port}!`))
