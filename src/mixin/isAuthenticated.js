export default {
  async beforeRouteEnter(to, from, next) {
    console.log(to);
    next(async (vm) => {
      console.log(vm);
    });
  },
};
