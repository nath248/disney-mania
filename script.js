//Watch Mode
const DOMAIN = `https://api.watchmode.com`;
const API_KEY = `Z6Q9Emo4sppKI2wOXNyImTt6R9bYFsbCULqvHUln`;
const SOURCE_ID = `372`;
const TYPES = [`movie`, `tv_series`];

// TMDB 
const DOMAIN1 = `https://api.themoviedb.org`;
const API_KEY1 = `bdb572feced0e53967b61a4a2056d474`;

//Buttons & Forms

const movieBtn = document.querySelector("#random-movie-btn");
const showBtn = document.querySelector("#random-show-btn");
const searchForm = document.querySelector("#search-input");
const searchInput = document.querySelector("#search");

async function fetchTitles(title) {
  const BASE_URL = `${DOMAIN}/v1/list-titles/?apiKey=${API_KEY}&source_ids=${SOURCE_ID}`;
  try {
    let res = await axios.get(BASE_URL);
    const titles = res.data.titles;
    let title = searchInput.value;

    const values = titles[0];
    const movieId = values.imdb_id;
    console.log(movieId);
    //return movieId;
  } catch (error) {
    console.log("ERROR!")
  } finally {
    console.log("DONE!")
  }
}

//fetchTitles();

async function fetchMovies() {
  const TYPE = TYPES[0];
  const BASE_URL = `${DOMAIN}/v1/list-titles/?apiKey=${API_KEY}&source_ids=${SOURCE_ID}&types=${TYPE}`;
  try {
    let res = await axios.get(BASE_URL);
    const titles = res.data.titles;
    const values = titles[Math.floor(Math.random() * titles.length)];
    const movieId = values.imdb_id;
    console.log(movieId);
    //return movieId;
  } catch (error) {
    console.log("ERROR!")
  } finally {
    console.log("DONE!")
  }
}

//fetchMovies();

async function fetchShows() {
  const TYPE = TYPES[1];
  const BASE_URL = `${DOMAIN}/v1/list-titles/?apiKey=${API_KEY}&source_ids=${SOURCE_ID}&types=${TYPE}`;
  try {
    let res = await axios.get(BASE_URL);
    const titles = res.data.titles;
    const values = titles[Math.floor(Math.random() * titles.length)];
    const showId = values.imdb_id;
    // console.log(showId);
    fetchDetails(showId);
  } catch (error) {
    console.log("ERROR!")
  } finally {
    console.log("DONE!")
  }
}

fetchShows();

async function fetchDetails(id) {
  const imdbId = id;
  const BASE_URL1 = `${DOMAIN1}/3/find/${imdbId}?api_key=${API_KEY1}&language=en-US&external_source=imdb_id`;
  try {
    let res = await axios.get(BASE_URL1);
    const disneyDetails = res.data;
    console.log(disneyDetails);
    let title = disneyDetails.movie_results[0].title;
    let poster = disneyDetails.movie_results[0].poster_path;
    let popularity = disneyDetails.movie_results[0].popularity;
    let overview = disneyDetails.movie_results[0].overview;
    console.log(disneyDetails);
    console.log(title);
    console.log(poster);
    console.log(popularity);
    console.log(overview);
  } catch (error) {
    console.log(error)
  } finally {
    console.log("DONE!")
  }
}

//fetchDetails();

// movieBtn.addEventListener("click", fetchMovies);
// showBtn.addEventListener("click", fetchShows);
// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let title = searchInput.value;
//   fetchTitles(title);
//   searchInput.value = "";
// });