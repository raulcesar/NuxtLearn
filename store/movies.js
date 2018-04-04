export const state = () => ({
  movies: []
})


export const mutations = {
  setMovies (state, movies) {
    state.movies = movies;
  }
};
