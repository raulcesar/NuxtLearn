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
}