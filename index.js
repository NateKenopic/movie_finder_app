let movieNameRef = document.getElementById('movie-name');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');

key = "5bfb9e24"

function getMovie() {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please enter a movie name</h3>`;
    } else {
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == "True") {
                console.log(data);
                if (data.Type == "movie") {
                    result.innerHTML = `
                        <div class="info">
                            <img src=${data.Poster} class="poster">
                            <div>
                                <h1>${data.Title}</h1>
                                <div class="rating">
                                    <img src="star-icon.svg">
                                    <img src="star-icon.svg">
                                    <img src="star-icon.svg">
                                    <h4>${data.imdbRating}</h4>
                                </div>
                                <div class="rating-votes">
                                    <h5>Votes:  ${data.imdbVotes}</h5>
                                </div>
                                <div class="details">
                                    <span>${data.Rated}</span>
                                    <span>${data.Year}</span>
                                    <span>${data.Runtime}</span>
                                </div>
                                <div class="genre">
                                    <div>${data.Genre.split(",").join("</div><div>")}</div>
                                </div>
                                <div class="cast">
                                    <h3>Cast:</h3>
                                    <p>${data.Actors}</p>
                                </div>
                            </div>
                        </div>
                        <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                    `;
                } else if (data.Type == "series") {
                    result.innerHTML = `
                        <div class="info">
                            <img src=${data.Poster} class="poster">
                            <div>
                                <h1>${data.Title}</h1>
                                <div class="rating">
                                    <img src="star-icon.svg">
                                    <img src="star-icon.svg">
                                    <img src="star-icon.svg">
                                    <h4>${data.imdbRating}</h4>
                                </div>
                                <div class="rating-votes">
                                    <h5>Votes:  ${data.imdbVotes}</h5>
                                </div>
                                <div class="details">
                                    <span>${data.Rated}</span>
                                    <span>${data.Year}&ensp;${data.totalSeasons}-Seasons</span>
                                    <span>${data.Runtime}</span>
                                </div>
                                <div class="genre">
                                    <div>${data.Genre.split(",").join("</div><div>")}</div>
                                </div>
                                <div class="cast">
                                    <h3>Cast:</h3>
                                    <p>${data.Actors}</p>
                                </div>
                            </div>
                        </div>
                        <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                    `;
                }
            } else {
                console.log(movieName + "movie not found");
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
            }
        }).catch(() => {
            result.innerHTML = `<h3 class="msg">Error Occured</h3>`
        });
    }
}

searchBtn.addEventListener("click", getMovie);