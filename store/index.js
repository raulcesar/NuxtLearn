export const state = () => ({
  counter: 10
})

export const actions = {
  nuxtServerInit (vuexContext, context) {
    if (!process.client) {
      console.log(`context.req: ${context.req}`);
    }
    return new Promise((resolve) => {
      console.log(`Running nuxtServerInit`);
      setTimeout(() => {
        vuexContext.commit('movies/setMovies', [ { id: 1, title: 'Movie 1' }]);
        resolve();
      }, 1500);
    });
  }

}
