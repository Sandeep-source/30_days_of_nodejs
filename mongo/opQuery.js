const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://sandeep:sandeep@cluster0.ab8ysr1.mongodb.net/sample_mflix?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  plot: String,
  genres: [String],
  runtime: Number,
  rated: String,
  cast: [String],
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  writers: [String],
  awards: {
    wins: Number,
    nominations: Number,
    text: String
  },
  lastupdated: Date,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number
    },
    dvd: Date,
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number,
      lastUpdated: Date,
      rotten: Number,
      production: String,
      fresh: Number
    },
    lastUpdated: Date
  },
  num_mflix_comments: Number
},{collection: "movies"});

const Movie = mongoose.model('Movie', movieSchema);


async function getMovies(){
    // let movies = await Movie.find({'imdb.rating' : {$in:[9,8]}})
    let movies = await Movie.find({'imdb.rating' : {$in:[9,8,7]}}).or([{'imdb.rating':9},{'imdb.votes':{$gt:10000}}])
    console.log(movies)
}


async function updateMovie(id){
    let movie  = await Movie.findById(id)
    if(!movie) return;
    movie.title = movie.title+" Updated"
    movie.save()
}

async function deleteMovie(id){
    let movie  = await Movie.findByIdAndDelete(id)
    console.log(movie)
}
// updateMovie('573a1390f29313caabcd446f')
// getMovies()

deleteMovie('573a1390f29313caabcd6223')