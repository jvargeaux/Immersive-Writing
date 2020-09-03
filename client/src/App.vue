<template>
  <div id="app">
    <Navigation v-on:nav-hide-toggled="recalcHeight" class="navigationBar" />
    <div class="router">
      <router-view />
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
    },
    methods: {
      recalcHeight: function() {
        setTimeout(() => {
          const writingWrapper = document.getElementById("writingWrapper");
          let calcHeight = window.innerHeight - document.getElementById("navWrapper").clientHeight;
          writingWrapper.style.height = calcHeight + "px";
        }, 5);
      }
    }
  }

  document.title = 'Title';
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap';
@import 'https://fonts.googleapis.com/css2?family=Caveat&family=Handlee&family=Harmattan&family=Nunito+Sans:wght@200;300&family=Palanquin:wght@100;300&family=Quicksand:wght@300;400&family=Tangerine:wght@400;700&display=swap';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  /* Dark */
  /* background: linear-gradient(45deg, #24252b, #181a21); */
  /* Light */
  background: linear-gradient(45deg, #242424, #141414);
  background-repeat: no-repeat;
  min-height: 100vh;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #a7a7a7;
}

a {
  text-decoration: none;
}

a.router-link-exact-active {
  /* color: #42b983; */
}

.navigationBar {
}

.router {
  background: linear-gradient(135deg, #242424, #141414);
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
