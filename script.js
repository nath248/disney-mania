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
    // console.log(titles);
    let title = searchInput.value;
    titles.forEach((titles) => {
      const titleValue = titles.title;
      if (titleValue == title) {
        // console.log(titleValue);
        let searchId = titles.imdb_id;
        fetchDetails(searchId);
      }
    });
  } catch (error) {
    console.log("ERROR!")
  } finally {
    console.log("DONE!")
  }
}

async function fetchMovies() {
  const TYPE = TYPES[0];
  const BASE_URL = `${DOMAIN}/v1/list-titles/?apiKey=${API_KEY}&source_ids=${SOURCE_ID}&types=${TYPE}`;
  try {
    let res = await axios.get(BASE_URL);
    const titles = res.data.titles;
    const values = titles[Math.floor(Math.random() * titles.length)];
    const movieId = values.imdb_id;
    console.log(movieId);
    fetchDetails(movieId);
  } catch (error) {
    console.log("ERROR!")
  } finally {
    console.log("DONE!")
  }
}

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

async function fetchDetails(id) {
  const imdbId = id;
  const BASE_URL1 = `${DOMAIN1}/3/find/${imdbId}?api_key=${API_KEY1}&language=en-US&external_source=imdb_id`;
  try {
    let res = await axios.get(BASE_URL1);
    const disneyDetails = res.data;
    if (TYPES === "movie") {
      //Movie Details
      let movieTitle = disneyDetails.movie_results[0].title;
      let moviePoster = disneyDetails.movie_results[0].poster_path;
      let moviePop = disneyDetails.movie_results[0].popularity;
      let movieOverview = disneyDetails.movie_results[0].overview;
      console.log(movieTitle);
      console.log(moviePoster);
      console.log(moviePop);
      console.log(movieOverview);
    } else if (TYPES === "tv_series") {
      //Show Details
      let showTitle = disneyDetails.tv_results[0].title;
      let showPoster = disneyDetails.tv_results[0].poster_path;
      let showPop = disneyDetails.tv_results[0].popularity;
      let showOverview = disneyDetails.tv_results[0].overview;
      console.log(showTitle);
      console.log(showPoster);
      console.log(showPop);
      console.log(showOverview);
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log("DONE!")
  }
}

// movieBtn.addEventListener("click", fetchMovies);
// showBtn.addEventListener("click", fetchShows);
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = searchInput.value;
  fetchTitles(title);
  // searchInput.value = "";
});