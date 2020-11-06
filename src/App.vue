<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* color: #2c3e50; */
  color: #333;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn-text {
  font-size: 14px !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.2rem;
}
</style>
