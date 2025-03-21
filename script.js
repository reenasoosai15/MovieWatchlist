const movies = [
    { id: 1, title: "Inception", image: "C:Users/DELL/Desktop/loop/1.jpg" },
    { id: 2, title: "Interstellar", image: "C:Users/DELL/Desktop/loop/2.jpg" },
    { id: 3, title: "The Dark Knight", image: "C:Users/DELL/Desktop/loop/3.jpg" }
];

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

function toggleWatchlist(movieId) {
    if (watchlist.includes(movieId)) {
        watchlist = watchlist.filter(id => id !== movieId);
    } else {
        watchlist.push(movieId);
    }
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    renderMovies();
    mockApiSync();
}

function renderMovies() {
    const moviesDiv = document.getElementById("movies");
    moviesDiv.innerHTML = "";
    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <button class="${watchlist.includes(movie.id) ? 'added' : ''}" onclick="toggleWatchlist(${movie.id})">
                ${watchlist.includes(movie.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </button>
        `;
        moviesDiv.appendChild(movieCard);
    });
}

function mockApiSync() {
    console.log("Syncing watchlist with mock API:", watchlist);
}

renderMovies();
