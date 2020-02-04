<template>
  <div id="app">
    <Navigation />
    <div class="router">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'app',
    components: {
      Navigation,
      Footer
    }
  }

  document.title = 'Cafe Tour Tokyo';
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  /* Dark */
  /* background: linear-gradient(45deg, #24252b, #181a21); */
  /* Light */
  background: linear-gradient(45deg, #d5d5d5, #fff);
  background-repeat: no-repeat;
  min-height: 100vh;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #474747;
}

a {
  text-decoration: none;
}

a.router-link-exact-active {
  /* color: #42b983; */
}

.router {
  background: linear-gradient(45deg, #d5d5d5, #fff);
}
</style>
