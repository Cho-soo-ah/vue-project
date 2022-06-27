<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link active">Home</router-link>
        <router-link to="/list" class="nav-link">List</router-link>
        <router-link to="/detail" class="nav-link">Detail</router-link>
      </div>
    </div>
  </nav>
  <div class="mt-4">
    <router-view :Data="Data"></router-view>
  </div>
</template>

<script>
import Data from "./assets/data";

export default {
  name: "App",
  data() {
    return { Data: Data };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
