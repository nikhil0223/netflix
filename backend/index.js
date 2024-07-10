const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // Add this line to require node-fetch
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ['https://netflix-liart-chi.vercel.app','http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  })
);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.TMDB_TOKEN,
  },
};

app.get('/', (req, res) => {
  res.json('hi');
});

app.get('/hero', async (req, res) => {
  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options);
    const data = await response.json();
    res.json(data.results);
  }
  catch(err){
    console.error('error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/movies/list', async (req, res) => {
  const category = req.body.cat;
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options);
    const json = await response.json();
    res.json(json);
  } catch (err) {
    console.error('error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// app.get('/movies/video',async (req, res) => {
//   const id = req.body.id;
//   try{
//     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
//     const json = await response.json();
//     res.json(json);
//   }catch(err){
//     console.error('error:' + err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get('/movies/detail',async (req, res) => {
//   const id = req.body.id;
//   try{
//     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
//     const json = response.json();
//     res.json(json);
//   }catch(err){
//     console.error('error:' + err);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.listen(port, () => console.log(`Server is running on port: ${port}`));