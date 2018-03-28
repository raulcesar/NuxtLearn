export default {
  data() {
    return {
      movieID: ''
    }
  },
  methods: {
    onLoadMovie() {
      this.$router.push(`/movies/${this.movieID}`)
    }
  }
  ,
  validate(data) {
    console.log(`data: ${data}`);
    return true;
  }
}
