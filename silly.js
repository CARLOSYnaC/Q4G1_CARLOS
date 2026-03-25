 let movieRatings = JSON.parse(localStorage.getItem("movieRatings"));

function showMovies() {
  const list = document.getElementById("movieList");
    list.innerHTML = "";
    for (let key in movieRatings) {
      const char = movieRatings[key];
      const div = document.createElement("div");
      div.className = "movie";
      div.innerHTML = `
        <strong>${movie.name}</strong> (Year: ${movie.year}
        <button class="delete-btn" onclick="removeMovie('${key}')">Delete</button>
        `;
      list.appendChild(div);
    }
}

document.getElementById("animeForm").addEventListener("submit", function(e) {
  e.preventDefault();
    const key = document.getElementById("key").value.trim();
    const name = document.getElementById("name").value.trim();
    const year = document.getElementById("year").value.trim();

movieRatings[key] = {name, year};

localStorage.setItem("movieRatings", JSON.stringify(movieRatings));
showMovies();
this.reset();
  });

function removeMovie(key) {
  delete movieRatings[key];
  localStorage.setItem("movieRatings", JSON.stringify(movieRatings));
  showMovies();
}

    showMovies();
