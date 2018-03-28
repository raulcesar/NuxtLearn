export default {
  // data() {
  //   return {
  //     movieID: '',
  //     movies: []
  //   }
  // },
  methods: {
    onLoadMovie () {
      this.$router.push(`/movies/${this.movieID}`)
    }
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          movieID: '',
          movies: [{ id: 1, title: 'Movie 1' }]
        });
      }, 1500);

    }


    );
  },
  // created() {
  //   setTimeout(() => {
  //     this.movies.push({id: 1, title: 'Movie 1'})
  //   }, 1500);

  // },
  validate (data) {
    console.log(`data: ${data}`);
    return true;
  }
}
