let mainContainer = document.querySelector("#container");

let pageTitle = document.createElement("h1");
pageTitle.textContent = "Movies";
mainContainer.append(pageTitle);


function getMovies() {
    fetch("movies.json")
      .then((response) => response.json())
      .then((movies) => {
        console.log(movies);
        
        movies.forEach((movie) => {
          console.log(movie);

          let title = movie.title;
          let rating = movie.rating.overallRating;
          let userRatings = movie.rating.userRatings;
          let year = movie.year;
          let description = movie.description;
          let genreArr = movie.genre;
          let director = movie.director;
          let actorsArr = movie.actors;
  
          let movieCard = document.createElement("div");
          mainContainer.append(movieCard);
  
          let movieTitle = document.createElement("h2");
          movieTitle.textContent = title;
  
          let movieRating = document.createElement("h4");
          movieRating.textContent = `Rating: ${rating}/10.  Rated ${userRatings} times.`;
  
          let movieYear = document.createElement("h4");
          movieYear.textContent = `Released in ${year}.`;
  
          let movieDescrpition = document.createElement("p");
          movieDescrpition.textContent = description;
  
          let genreList = document.createElement("ul");
          genreArr.forEach((genre) => {
            let genreItem = document.createElement("li");
            genreItem.textContent = genre;
            genreList.append(genreItem);
          });
  
          let movieDirector = document.createElement("h4");
          movieDirector.textContent = `Director: ${director} `;
  
          let actorsTitle = document.createElement("h4");
          actorsTitle.textContent = "Main stars:";
          let actorsList = document.createElement("ul");
  
          actorsArr.forEach((actor) => {
            let actorsItem = document.createElement("li");
            actorsItem.textContent = actor;
            actorsList.append(actorsItem);
          });
  
          movieCard.append(movieTitle, movieRating, movieYear, movieDescrpition, genreList, movieDirector, actorsTitle, actorsList);
        });
      });
  }
  getMovies();