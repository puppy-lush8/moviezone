
// CineVerse movie collection
const movies = [
{
    title: "Inception",
    rating: 8.8,
        year: 2010,
    runtime: "2h 28m",
    type: "Movie",
    genre: "Sci-Fi",
    description: "A thief enters people's dreams to steal secrets.",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    trailer: "https://www.youtube.com/results?search_query=Inception+official+trailer",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
},

{
    title: "The Dark Knight",
    rating: 9.0,
    year: 2008,
    runtime: "2h 32m",
    genre: "Action",
        description: "Batman faces the dangerous Joker in Gotham City.",
        
poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.youtube.com/results?search_query=The+Dark+Knight+official+trailer",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },
        
{
    title: "Interstellar",
    rating: 8.7,
    year: 2014,
    runtime: "2h 49m",
    genre: "Sci-Fi",
        description: "Explorers travel through space to find a new home.",
        
poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
trailer: "https://www.youtube.com/results?search_query=Interstellar+official+trailer",
video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
        
title: "The Avengers",
rating: 8.0,
year: 2012,
runtime: "2h 23m",
genre: "Action",
        description: "Superheroes unite to protect Earth from a threat.",
        
poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
trailer: "https://www.youtube.com/results?search_query=The+Avengers+official+trailer",
video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
        
title: "Titanic",
rating: 7.9,
year: 1997,
runtime: "3h 14m",
genre: "Romance",
        description: "Two young people fall in love aboard a famous ship.",
        
poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
trailer: "https://www.youtube.com/results?search_query=Titanic+official+trailer",
video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },
    {
        
title: "Joker",
rating: 8.2,
year: 2019,
runtime: "2h 2m",
genre: "Drama",
        description: "A troubled man experiences a life-changing transformation.",
       
poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
trailer: "https://www.youtube.com/results?search_query=Joker+official+trailer",
video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    }
   
    ,
    {
       
title: "Black Panther",
rating: 7.3,
year: 2018,
runtime: "2h 14m",
genre: "Action",
        description: "A young king protects Wakanda and its people.",
        poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        trailer: "https://www.youtube.com/results?search_query=Black+Panther+official+trailer",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },
    {
       
title: "Avatar",
rating: 7.9,
year: 2009,
runtime: "2h 42m",
genre: "Sci-Fi",
        description: "A marine explores an extraordinary world beyond Earth.",
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        trailer: "https://www.youtube.com/results?search_query=Avatar+official+trailer",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },
    {
       
title: "Jurassic World",
rating: 6.9,
year: 2015,
runtime: "2h 4m",
genre: "Action",
        description: "A dinosaur theme park faces a dangerous crisis.",
        poster: "https://image.tmdb.org/t/p/w500/A0LZHXUzo5C60Oahvt7VxvwuzHw.jpg",
        trailer: "https://www.youtube.com/results?search_query=Jurassic+World+official+trailer",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },
    {
       
title: "The Matrix",
rating: 8.7,
year: 1999,
runtime: "2h 16m",
genre: "Sci-Fi",
        description: "A computer hacker discovers a startling hidden reality.",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        trailer: "https://www.youtube.com/results?search_query=The+Matrix+official+trailer",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },
    {
        
title: "The Batman",
rating: 7.8,
year: 2022,
runtime: "2h 56m",
genre: "Action",
        description: "Batman investigates a series of crimes in Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        trailer: "https://www.youtube.com/results?search_query=The+Batman+2022+official+trailer",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    },
    {
        
title: "Coco",
rating: 8.4,
year: 2017,
runtime: "1h 45m",
genre: "Drama",
        description: "A young musician discovers his family's extraordinary history.",
        poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        trailer: "https://www.youtube.com/results?search_query=Coco+Pixar+official+trailer",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    }
     ,
    {

title: "Nairobi Half Life",
rating: 7.4,
year: 2012,
runtime: "1h 36m",
genre: "Drama",
        description: "A young man travels to Nairobi pursuing his dreams and faces harsh realities.",
        poster: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Nairobi_Half_Life_Poster.png",
        trailer: "https://www.youtube.com/results?search_query=Nairobi+Half+Life+official+trailer",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        category: "Kenyan"
    },
    {
        
title: "Rafiki",
rating: 6.8,
year: 2018,
runtime: "1h 23m",
genre: "Drama",
        description: "Two young women form a close bond in Nairobi despite social pressures.",
       poster: "https://www.mpmpremium.com/storage/movies/24/poster_pic/3213bc48dd8aad26c24f42c4210584d0.png",
        trailer: "https://www.youtube.com/results?search_query=Rafiki+Kenyan+film+official+trailer",
        video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        category: "Kenyan"
    }
];

const series = [
    {
        title: "Stranger Things",
        rating: 8.7,
        genre: "Sci-Fi / Drama",
        description: "A group of friends uncover mysterious supernatural events in their town.",
        poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
        trailer: "https://www.youtube.com/results?search_query=Stranger+Things+official+trailer"
    },
    {
        title: "Wednesday",
        rating: 8.0,
        genre: "Mystery / Comedy",
        description: "Wednesday Addams investigates strange mysteries at Nevermore Academy.",
        poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
        trailer: "https://www.youtube.com/results?search_query=Wednesday+Netflix+official+trailer"
    },
    {
        title: "Breaking Bad",
        rating: 9.5,
        genre: "Crime / Drama",
        description: "A chemistry teacher turns to producing illegal drugs after a life-changing diagnosis.",
        poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        trailer: "https://www.youtube.com/results?search_query=Breaking+Bad+official+trailer"
    },
    {
        title: "The Witcher",
        rating: 7.9,
        genre: "Fantasy / Action",
        description: "A monster hunter navigates a dangerous world filled with magic and political conflict.",
        poster: "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
        trailer: "https://www.youtube.com/results?search_query=The+Witcher+Netflix+official+trailer"
    }
];

function displayKenyanMovies() {
    const kenyanMovieList = document.getElementById("kenyan-movie-list");

    if (!kenyanMovieList) return;

    const kenyanMovies = movies.filter(
        movie => movie.category === "Kenyan"
    );

    kenyanMovieList.innerHTML = "";

    kenyanMovies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title} poster">
            <h3>${movie.title}</h3>
            <p>⭐ ${movie.rating}</p>
            <p>${movie.genre}</p>
        `;

        card.addEventListener("click", function () {
            openMovieDetails(movie);
        });

        kenyanMovieList.appendChild(card);
    });
}

displayKenyanMovies();

const movieContainer = document.getElementById("movie-container");
const searchInput = document.getElementById("search");
const seriesContainer = document.getElementById("series-container");
const genreFilter = document.getElementById("genre-filter");
const seriesSearchInput = document.getElementById("series-search");
const seriesGenreFilter = document.getElementById("series-genre-filter");
const movieDetails = document.getElementById("movie-details");
const backButton = document.getElementById("back-button");
const detailsPoster = document.getElementById("details-poster");
const detailsTitle = document.getElementById("details-title");
const detailsRating = document.getElementById("details-rating");
const detailsGenre = document.getElementById("details-genre");
const detailsYear = document.getElementById("details-year");
const detailsRuntime = document.getElementById("details-runtime");
const detailsDescription = document.getElementById("details-description");
const trailerButton = document.getElementById("trailer-button");
const watchlistButton = document.getElementById("watchlist-button");
const watchlistContainer = document.getElementById("watchlist-container");
const moviePlayer = document.getElementById("movie-player");
let watchlist = JSON.parse(localStorage.getItem("movieZoneWatchlist")) || [];

function openMovieDetails(movie) {
    previousSection = "movies";

    detailsPoster.src = movie.poster;
    detailsPoster.alt = movie.title + " poster";
    detailsTitle.textContent = movie.title;
    detailsRating.textContent = "⭐ " + movie.rating + " / 10";
    detailsYear.textContent = "Release Year: " + (movie.year || "Not available");
    detailsRuntime.textContent = "Duration: " + (movie.runtime || "Not available");
    detailsGenre.textContent = "Genre: " + movie.genre;
    detailsDescription.textContent = movie.description;

    // Load the selected movie's video
    if (moviePlayer) {
        moviePlayer.pause();
        moviePlayer.currentTime = 0;

        const videoSource = moviePlayer.querySelector("source");
        const playerNote = document.getElementById("player-note");
        const playerHeading = document.getElementById("player-heading");

        if (videoSource) {
            if (movie.video) {
                videoSource.src = movie.video;
                moviePlayer.load();
                moviePlayer.hidden = false;

                if (playerHeading) {
                    playerHeading.hidden = false;
                }

                if (playerNote) {
                    playerNote.hidden = false;
                    playerNote.textContent =
                        "Playing a sample video for demonstration.";
                }
            } else {
                videoSource.removeAttribute("src");
                moviePlayer.load();
                moviePlayer.hidden = true;

                if (playerHeading) {
                    playerHeading.hidden = true;
                }

                if (playerNote) {
                    playerNote.hidden = true;
                }
            }
        }
    }

    trailerButton.onclick = function () {
        window.open(movie.trailer, "_blank", "noopener,noreferrer");
    };

    movieDetails.hidden = false;
    movieContainer.parentElement.hidden = true;

    // Hide the search section while viewing details
    searchInput.parentElement.hidden = true;

    // Bring the details screen into view
    movieDetails.scrollIntoView({ behavior: "smooth" });
}

  
function saveToWatchlist(movie) {
    const alreadySaved = watchlist.some(item => item.title === movie.title);

    if (alreadySaved) {
        alert("This movie is already in your Watchlist!");
        return;
    }

    watchlist.push(movie);
    localStorage.setItem("movieZoneWatchlist", JSON.stringify(watchlist));

    displayWatchlist();
    alert(movie.title + " added to your Watchlist!");
}

function displayWatchlist() {
    if (!watchlistContainer) return;

    watchlistContainer.innerHTML = "";

    if (watchlist.length === 0) {
        watchlistContainer.textContent = "Your Watchlist is empty.";
        return;
    }

    watchlist.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
card.style.cursor = "pointer";

card.addEventListener("click", function () {
    if (movies.some(item => item.title === movie.title)) {
        openMovieDetails(movie);
    } else {
        const show = series.find(item => item.title === movie.title);

        if (show) {
            previousSection = "series";

            detailsPoster.src = show.poster;
            detailsPoster.alt = show.title + " poster";
            detailsTitle.textContent = show.title;
            detailsRating.textContent = "⭐ " + show.rating + " / 10";
            detailsGenre.textContent = "Genre: " + show.genre;
            detailsDescription.textContent = show.description;

            if (moviePlayer) {
                moviePlayer.pause();
                moviePlayer.currentTime = 0;

                const source = moviePlayer.querySelector("source");
                if (source) {
                    source.removeAttribute("src");
                    moviePlayer.load();
                }

                moviePlayer.hidden = true;
            }

            const heading = document.getElementById("player-heading");
            const note = document.getElementById("player-note");

            if (heading) heading.hidden = true;
            if (note) note.hidden = true;

            trailerButton.onclick = function () {
                window.open(show.trailer, "_blank", "noopener,noreferrer");
            };

            movieDetails.hidden = false;
            document.getElementById("movies").hidden = true;
            document.getElementById("series").hidden = true;
            searchInput.parentElement.hidden = true;

            movieDetails.scrollIntoView({ behavior: "smooth" });
        }
    }
});
        const poster = document.createElement("img");
        poster.src = movie.poster;
        poster.alt = movie.title + " poster";

        const info = document.createElement("div");
        info.className = "movie-info";

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.type = "button";

        removeButton.addEventListener("click", function (event) {
            event.stopPropagation();
            watchlist = watchlist.filter(item => item.title !== movie.title);
            localStorage.setItem("movieZoneWatchlist", JSON.stringify(watchlist));
            displayWatchlist();
        });
        info.append(title);
        card.append(poster, info, removeButton);
        watchlistContainer.appendChild(card);
    });
}

function displayMovies(movieList) {
    movieContainer.innerHTML = "";

    if (movieList.length === 0) {
        movieContainer.textContent = "No movies found. Try another title.";
        return;
    }

    movieList.forEach(movie => {
        

const card = document.createElement("div");
card.className = "movie-card";

card.setAttribute("role", "button");
card.setAttribute("tabindex", "0");
card.setAttribute("aria-label", "View details for " + movie.title);
card.style.cursor = "pointer";

card.addEventListener("click", function () {
    openMovieDetails(movie);
});

card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMovieDetails(movie);
    }
});


card.setAttribute("role", "button");
card.setAttribute("tabindex", "0");
card.setAttribute("aria-label", "View details for " + movie.title);

card.addEventListener("click", function () {
    openMovieDetails(movie);
});

card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMovieDetails(movie);
    }
});

        const poster = document.createElement("img");
        poster.src = movie.poster;
        poster.alt = movie.title + " poster";
        poster.onerror = function () {
            this.alt = "Poster unavailable: " + movie.title;
        };

        const info = document.createElement("div");
        info.className = "movie-info";

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const rating = document.createElement("span");
        rating.textContent = "⭐ " + movie.rating;

        info.append(title, rating);

        const description = document.createElement("p");
        description.textContent = movie.description;

        const genre = document.createElement("p");
        genre.textContent = "Genre: " + movie.genre;

        card.append(poster, info, description, genre);
        movieContainer.appendChild(card);
    });
}


function displaySeries(seriesList) {
    if (!seriesContainer) return;

    seriesContainer.innerHTML = "";

    seriesList.forEach(show => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.style.cursor = "pointer";

        
card.addEventListener("click", function () {
    previousSection = "series";

    detailsPoster.src = show.poster;
    detailsPoster.alt = show.title + " poster";
    detailsTitle.textContent = show.title;
    detailsRating.textContent = "⭐ " + show.rating + " / 10";
    detailsGenre.textContent = "Genre: " + show.genre;
    detailsDescription.textContent = show.description;

    // Stop and hide any previously selected movie's video
    if (moviePlayer) {
        moviePlayer.pause();
        moviePlayer.currentTime = 0;

        const videoSource = moviePlayer.querySelector("source");

        if (videoSource) {
            videoSource.removeAttribute("src");
            moviePlayer.load();
        }

        moviePlayer.hidden = true;
    }

    const playerHeading = document.getElementById("player-heading");
    const playerNote = document.getElementById("player-note");

    if (playerHeading) playerHeading.hidden = true;
    if (playerNote) playerNote.hidden = true;

    trailerButton.onclick = function () {
        window.open(show.trailer, "_blank", "noopener,noreferrer");
    };

    movieDetails.hidden = false;
    document.getElementById("series").hidden = true;
    document.getElementById("movies").hidden = true;
    searchInput.parentElement.hidden = true;

    movieDetails.scrollIntoView({ behavior: "smooth" });
});

        const poster = document.createElement("img");
        poster.src = show.poster;
        poster.alt = show.title + " poster";

        const info = document.createElement("div");
        info.className = "movie-info";

        const title = document.createElement("h3");
        title.textContent = show.title;

        const rating = document.createElement("span");
        rating.textContent = "⭐ " + show.rating;

        info.append(title, rating);

        const genre = document.createElement("p");
        genre.textContent = "Genre: " + show.genre;

        card.append(poster, info, genre);
        seriesContainer.appendChild(card);
    });
}


if (searchInput) {
    searchInput.addEventListener("input", filterMovies);
}

if (genreFilter) {
    genreFilter.addEventListener("change", filterMovies);
}

function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreFilter ? genreFilter.value : "all";

    const filteredMovies = movies.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(searchTerm);
        const matchesGenre =
            selectedGenre === "all" || movie.genre === selectedGenre;

        return matchesTitle && matchesGenre;
    });

    displayMovies(filteredMovies);
}


displayMovies(movies);
displaySeries(series);


if (seriesSearchInput) {
    seriesSearchInput.addEventListener("input", filterSeries);
}

if (seriesGenreFilter) {
    seriesGenreFilter.addEventListener("change", filterSeries);
}

function filterSeries() {
    const searchTerm = seriesSearchInput.value.toLowerCase().trim();
    const selectedGenre = seriesGenreFilter
        ? seriesGenreFilter.value
        : "all";

    const filteredSeries = series.filter(show => {
        const matchesTitle = show.title.toLowerCase().includes(searchTerm);
        const matchesGenre =
            selectedGenre === "all" || show.genre === selectedGenre;

        return matchesTitle && matchesGenre;
    });

    displaySeries(filteredSeries);

    if (filteredSeries.length === 0) {
        seriesContainer.textContent = "No TV series found. Try another title or genre.";
    }
}



watchlistButton.addEventListener("click", function () {
    const selectedTitle = detailsTitle.textContent;

    const selectedItem = [...movies, ...series].find(
        item => item.title === selectedTitle
    );

    if (selectedItem) {
        saveToWatchlist(selectedItem);
    }
});


displayWatchlist();
let previousSection = "movies";

backButton.addEventListener("click", function () {
    movieDetails.hidden = true;

    document.getElementById("movies").hidden = false;
    document.getElementById("series").hidden = false;
    searchInput.parentElement.hidden = false;

    if (previousSection === "series") {
        document.getElementById("series").scrollIntoView({
            behavior: "smooth"
        });
    } else {
        document.getElementById("movies").scrollIntoView({
            behavior: "smooth"
        });
    }
});

const heroDetailsButton = document.getElementById("hero-details-button");
const heroBrowseButton = document.getElementById("hero-browse-button");

if (heroDetailsButton) {
    heroDetailsButton.addEventListener("click", function () {
        const featuredMovie = movies.find(
            movie => movie.title === "Inception"
        );

        if (featuredMovie) {
            openMovieDetails(featuredMovie);
        }
    });
}

if (heroBrowseButton) {
    heroBrowseButton.addEventListener("click", function () {
        document.getElementById("movies").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const trendingContainer = document.getElementById("trending-movies");

if (trendingContainer) {

    const trendingMovies = movies.slice(0, 8);


    trendingContainer.innerHTML = trendingMovies.map(movie => `
        <div class="movie-card" tabindex="0">
            <img src="${movie.poster}" alt="${movie.title} poster">
            <h3>${movie.title}</h3>
            <p>⭐ ${movie.rating}</p>
        </div>
    `).join("");

    trendingContainer.querySelectorAll(".movie-card").forEach((card, index) => {
        card.addEventListener("click", function () {
            openMovieDetails(trendingMovies[index]);
        });

        card.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                openMovieDetails(trendingMovies[index]);
            }
        });
    });
}

const trendingRow = document.getElementById("trending-movies");
const trendingLeftButton = document.getElementById("trending-left");
const trendingRightButton = document.getElementById("trending-right");

if (trendingRow && trendingLeftButton && trendingRightButton) {
    trendingLeftButton.addEventListener("click", function () {
        trendingRow.scrollBy({
            left: -400,
            behavior: "smooth"
        });
    });

    trendingRightButton.addEventListener("click", function () {
        trendingRow.scrollBy({
            left: 400,
            behavior: "smooth"
        });
    });
}
