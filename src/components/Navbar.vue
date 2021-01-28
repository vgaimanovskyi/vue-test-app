<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link tag="a" to="/" class="brand-logo left">Test</router-link>
      <ul class="right">
        <router-link tag="li" to="/" exact active-class="active">
          <a href="#">Home</a>
        </router-link>
        <router-link tag="li" to="/record" active-class="active">
          <a href="#">Record</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style  lang="scss">
</style>