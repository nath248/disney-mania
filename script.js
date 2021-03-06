//Watch Mode
const DOMAIN = `https://api.watchmode.com`;
const API_KEY = `Z6Q9Emo4sppKI2wOXNyImTt6R9bYFsbCULqvHUln`;
const SOURCE_ID = `372`;
const TYPES = [`movie`, `tv_series`];

// TMDB 
const DOMAIN1 = `https://api.themoviedb.org`;
const API_KEY1 = `bdb572feced0e53967b61a4a2056d474`;
const imgBaseUrl = `https://image.tmdb.org/t/p/w200`;

//Buttons & Forms

const movieBtn = document.querySelector("#random-movie-btn");
const showBtn = document.querySelector("#random-show-btn");
const searchForm = document.querySelector("#search-input");
const searchInput = document.querySelector("#search");
const movieDiv = document.querySelector("#movie");
const showDiv = document.querySelector("#show");
const titleDiv = document.querySelector("#title");

async function fetchTitles() {
  const TYPE = `movie,tv_series`;
  const BASE_URL = `${DOMAIN}/v1/list-titles/?apiKey=${API_KEY}&source_ids=${SOURCE_ID}&types=${TYPE}&page=1`;
  const BASE_URL1 = `${DOMAIN}/v1/list-titles/?apiKey=${API_KEY}&source_ids=${SOURCE_ID}&types=${TYPE}&page=2`;
  const BASE_URL2 = `${DOMAIN}/v1/list-titles/?apiKey=${API_KEY}&source_ids=${SOURCE_ID}&types=${TYPE}&page=3`;
  try {
    let res = await axios.get(BASE_URL);
    let res1 = await axios.get(BASE_URL1);
    let res2 = await axios.get(BASE_URL2);

    axios.all([res, res1, res2]).then(axios.spread((...response) => {
      const titles = response[0].data.titles;
      const titles1 = response[1].data.titles;
      const titles2 = response[2].data.titles;
      let title = searchInput.value;
      titles.forEach((titles) => {
        const titleValue = titles.title;
        const titleCase = titleValue.toLowerCase();
        if (titleValue == title) {
          let searchId = titles.imdb_id;
          fetchTitleDetails(searchId);
          searchInput.value = "";
        } else if (titleCase == title) {
          let searchId = titles.imdb_id;
          fetchTitleDetails(searchId);
          searchInput.value = "";
        }
      });
      titles1.forEach((titles) => {
        const titleValue = titles.title;
        const titleCase = titleValue.toLowerCase();
        if (titleValue == title) {
          let searchId = titles.imdb_id;
          fetchTitleDetails(searchId);
          searchInput.value = "";
        } else if (titleCase == title) {
          let searchId = titles.imdb_id;
          fetchTitleDetails(searchId);
          searchInput.value = "";
        }
      });
      titles2.forEach((titles) => {
        const titleValue = titles.title;
        const titleCase = titleValue.toLowerCase();
        if (titleValue == title) {
          let searchId = titles.imdb_id;
          fetchTitleDetails(searchId);
          searchInput.value = "";
        } else if (titleCase == title) {
          let searchId = titles.imdb_id;
          fetchTitleDetails(searchId);
          searchInput.value = "";
        }
      });
    }));
    //https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios -(Link used to figure out how to call multiple api links at the same time)

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
    fetchMovieDetails(movieId);
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
    fetchShowDetails(showId);
  } catch (error) {
    console.log("ERROR!")
  } finally {
    console.log("DONE!")
  }
}

async function fetchMovieDetails(id) {
  const imdbId = id;
  const BASE_URL1 = `${DOMAIN1}/3/find/${imdbId}?api_key=${API_KEY1}&language=en-US&external_source=imdb_id`;
  try {
    let res = await axios.get(BASE_URL1);
    const disneyDetails = res.data;
    //Movie Details
    let innerMovieDiv = document.createElement("div");
    innerMovieDiv.classList.add("innerDiv");
    movieDiv.append(innerMovieDiv);

    let movieTitle = document.createElement("h2");
    movieTitle.classList.add("title");
    movieTitle.innerText = disneyDetails.movie_results[0].title;
    innerMovieDiv.append(movieTitle);

    let moviePoster = document.createElement("img");
    moviePoster.src = `${imgBaseUrl}${disneyDetails.movie_results[0].poster_path}`;
    innerMovieDiv.append(moviePoster);

    let overviewDiv = document.createElement("div");
    overviewDiv.classList.add("overviewDiv");
    innerMovieDiv.append(overviewDiv);

    let movieRelease = document.createElement("p");
    movieRelease.innerText = `Release Date: ${disneyDetails.movie_results[0].release_date}`;
    overviewDiv.append(movieRelease);

    let moviePop = document.createElement("p");
    moviePop.innerText = `Popularity: ${disneyDetails.movie_results[0].popularity}`;
    overviewDiv.append(moviePop);

    let movieOverview = document.createElement("p");
    movieOverview.innerText = `Overview: ${disneyDetails.movie_results[0].overview}`;
    overviewDiv.append(movieOverview);
  } catch (error) {
    console.log(error)
  } finally {
    console.log("DONE!")
  }
}

async function fetchShowDetails(id) {
  const imdbId = id;
  const BASE_URL1 = `${DOMAIN1}/3/find/${imdbId}?api_key=${API_KEY1}&language=en-US&external_source=imdb_id`;
  try {
    let res = await axios.get(BASE_URL1);
    const disneyDetails = res.data;
    //Show Details
    let innerShowDiv = document.createElement("div");
    innerShowDiv.classList.add("innerDiv");
    showDiv.append(innerShowDiv);

    let showTitle = document.createElement("h2");
    showTitle.classList.add("title");
    showTitle.innerText = disneyDetails.tv_results[0].name;
    innerShowDiv.appendChild(showTitle);

    let showPoster = document.createElement("img");
    showPoster.src = `${imgBaseUrl}${disneyDetails.tv_results[0].poster_path}`;
    innerShowDiv.appendChild(showPoster);

    let overviewDiv = document.createElement("div");
    overviewDiv.classList.add("overviewDiv");
    innerShowDiv.append(overviewDiv);

    let showRelease = document.createElement("p");
    showRelease.innerText = `Air Date: ${disneyDetails.tv_results[0].first_air_date}`;
    overviewDiv.appendChild(showRelease);

    let showPop = document.createElement("p");
    showPop.innerText = `Popularity: ${disneyDetails.tv_results[0].popularity}`;
    overviewDiv.appendChild(showPop);

    let showOverview = document.createElement("p");
    showOverview.innerText = `Overview: ${disneyDetails.tv_results[0].overview}`;
    overviewDiv.appendChild(showOverview);
  } catch (error) {
    console.log(error)
  } finally {
    console.log("DONE!")
  }
}

async function fetchTitleDetails(id) {
  const imdbId = id;
  const BASE_URL1 = `${DOMAIN1}/3/find/${imdbId}?api_key=${API_KEY1}&language=en-US&external_source=imdb_id`;
  try {
    let res = await axios.get(BASE_URL1);
    const disneyDetails = res.data;
    let innerTitleDiv = document.createElement("div");
    innerTitleDiv.classList.add("innerDiv");
    titleDiv.append(innerTitleDiv);

    if (disneyDetails.movie_results.length === 1) {
      let movieTitle = document.createElement("h2");
      movieTitle.classList.add("title");
      movieTitle.innerText = disneyDetails.movie_results[0].title;
      innerTitleDiv.append(movieTitle);

      let moviePoster = document.createElement("img");
      moviePoster.src = `${imgBaseUrl}${disneyDetails.movie_results[0].poster_path}`;
      innerTitleDiv.append(moviePoster);

      let overviewDiv = document.createElement("div");
      overviewDiv.classList.add("overviewDiv");
      innerTitleDiv.append(overviewDiv);

      let movieRelease = document.createElement("p");
      movieRelease.innerText = `Release Date: ${disneyDetails.movie_results[0].release_date}`;
      overviewDiv.append(movieRelease);

      let moviePop = document.createElement("p");
      moviePop.innerText = `Popularity: ${disneyDetails.movie_results[0].popularity}`;
      overviewDiv.append(moviePop);

      let movieOverview = document.createElement("p");
      movieOverview.innerText = `Overview: ${disneyDetails.movie_results[0].overview}`;
      overviewDiv.append(movieOverview);
    } else if (disneyDetails.tv_results.length === 1) {
      let showTitle = document.createElement("h2");
      showTitle.classList.add("title");
      showTitle.innerText = disneyDetails.tv_results[0].name;
      innerTitleDiv.appendChild(showTitle);

      let showPoster = document.createElement("img");
      showPoster.src = `${imgBaseUrl}${disneyDetails.tv_results[0].poster_path}`;
      innerTitleDiv.appendChild(showPoster);

      let overviewDiv = document.createElement("div");
      overviewDiv.classList.add("overviewDiv");
      innerTitleDiv.append(overviewDiv);

      let showRelease = document.createElement("p");
      showRelease.innerText = `Air Date: ${disneyDetails.tv_results[0].first_air_date}`;
      overviewDiv.appendChild(showRelease);

      let showPop = document.createElement("p");
      showPop.innerText = `Popularity: ${disneyDetails.tv_results[0].popularity}`;
      overviewDiv.appendChild(showPop);

      let showOverview = document.createElement("p");
      showOverview.innerText = `Overview: ${disneyDetails.tv_results[0].overview}`;
      overviewDiv.appendChild(showOverview);
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log("DONE!")
  }
}

movieBtn.addEventListener("click", () => {
  removeDivContents();
  fetchMovies();
});
showBtn.addEventListener("click", () => {
  removeDivContents();
  fetchShows();
});
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  removeDivContents();
  fetchTitles();
});

function removeDivContents() {
  movieDiv.innerHTML = "";
  showDiv.innerHTML = "";
  titleDiv.innerHTML = "";
}

// Favorites
// https://medium.com/the-web-tub/tutorial-lets-make-a-favorite-star-button-in-javascript-using-the-web-components-api-e0899cbfa4fd 

// const star1 = document.querySelector("#star1");
// const star2 = document.querySelector("#star2");
// const star3 = document.querySelector("#star3");

// star1.addEventListener("click", () => {
//   star1.style.color = "#ffac33";
//   let content = document.querySelector(".innerDiv");

// let extern = document.querySelector('link[rel="import"][href="../fav-and-watched/index.html"]').import;
// console.log(extern);

// let movieDetails = extern.querySelector("#movie");
// console.log(movieDetails);

// let movieDiv = document.querySelector("link[rel=import][href='../fav-and-watched/index.html']")
//   .import.querySelector("#favorite-movies");
// let link = document.createElement("link");
// link.rel = "import";
// link.href = "../fav-and-watched/index.html";
// link.setAttribute("async", "");
// let contentPgTwo = link.import;
// let contentEl = contentPgTwo.querySelector("#favorite-movies");
// console.log(content);
  // console.log(movieDiv);
  // console.log(pgDiv);

// })

// star2.addEventListener("click", () => {
//   star2.style.color = "#ffac33";
//   let content = document.querySelector(".innerDiv");
//   console.log(content);
// })

// star3.addEventListener("click", () => {
//   star3.style.color = "#ffac33";
//   let content = document.querySelector(".innerDiv");
//   console.log(content);
// })

// Fireworks 