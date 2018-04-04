export default {
  data() {
    return {
      api: process.env.API_HOST
    }
  },
  methods: {
    onLoadMovie () {
      this.$router.push(`/movies/${this.movieID}`)
    }
  },
  computed: {
    movies() {
       return this.$store.state.movies.movies;
    }
  },

  // asyncData () {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({
  //         movieID: '',
  //         movies: []
  //       });
  //     }, 1500);

  //   }


  //   );
  // },
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
