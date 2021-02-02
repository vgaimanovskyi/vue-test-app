<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
  },
  async created() {
    await this.$store.dispatch("fetchData");
  },
  watch: {
    error(message) {
      this.$error(message || "Ops, its crashed");
    },
  },
};
</script>

<style lang='scss'>
@import "~materialize-css/dist/css/materialize.min.css";

nav .brand-logo {
  padding: 0 15px;
}
.container {
  margin-bottom: 50px;
}
.page-caption {
  font-size: 42px;

  @media screen and (max-width: 599px) {
    font-size: 34px;
  }
  @media screen and (max-width: 399px) {
    font-size: 24px;
  }
}
</style>
