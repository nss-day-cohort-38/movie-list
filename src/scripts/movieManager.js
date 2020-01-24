const movieFactory = (movie) => {
  return `
    <section class="movie">
      <div>Title: ${movie.title}</div>
      <div>Date: ${movie.yearReleased}</div>
    </section>
  `;
};

const renderMovies = (movies) => {
  const container = document.querySelector("#movie-container");
  movies.forEach(movie => {
    const movieHtml = movieFactory(movie);
    container.innerHTML += movieHtml;
  });
};
