import { mapState } from 'vuex'



export default {
  computed: {
    zebu() {
       return this.$store.state.counter + 3;
    },
    ...mapState([
      // map this.count to store.state.count
      'counter'
    ])

  },

  validate(data) {
    // console.log(`data: ${JSON.stringify(data)}`);
    return true;

  }
  // data() {
  //   return {
  //     movies: {
  //       '1': 'Ze Buceta',
  //       '2': 'Ze Buceta strikes again'

  //     }
  //   }
  // }
  // ,
  // validate(data) {
  //   console.log(`data: ${data}`);
  // }
  // ,
  // validate(data) {
  //   console.log(`data: ${data}`);
  // }
}
