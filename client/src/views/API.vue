<template>
  <div class="apiContainer">
    <div class="buttonContainer">
      <button class="apiButton" v-on:click="apiGetCafes">API Get Cafes</button>
      <button class="apiButton" v-on:click="apiGetPosts">API Get Posts</button>
    </div>
    <div class="apiOutput">
      <li v-for="cafe in cafes" v-bind:key="cafe.id">
        <Cafe v-bind:cafe="cafe" />
      </li>
      <li v-for="post in posts" v-bind:key="post.id">
        <Post v-bind:post="post" />
      </li>
    </div>
  </div>
</template>

<script>
  import Post from '../components/Post.vue';
  import Cafe from '../components/Cafe.vue';

  const API_CAFES_URL = window.location.hostname + ':5000/api/cafes';
  const API_POSTS_URL = window.location.hostname + ':5000/api/posts';
  // const API_POST_URL = 'http://localhost:5000/api/posts';

  export default {
    name: 'API',
    components: {
      Post,
      Cafe
    },
    data() {
      return {
        cafes: [],
        posts: []
      }
    },
    methods: {
      apiGetCafes: function() {
        if (this.posts.length) {
          this.posts = [];
        }
        if (this.cafes.length) {
          return;
        }
        fetch(API_CAFES_URL, {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(res => {
          return res.json()
        })
        .then(data => {
          data.forEach(item => {
            this.cafes.push(item)
          })
        })
        .catch(e => {
          document.getElementById("output").innerHTML = e
        })

      },
      apiGetPosts: function() {
        if (this.cafes.length) {
          this.cafes = [];
        }
        if (this.posts.length) {
          return;
        }
        fetch(API_POSTS_URL, {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(res => {
          return res.json()
        })
        .then(data => {
          data.forEach(item => {
            this.posts.push(item)
          })
        })
        .catch(e => {
          document.getElementById("output").innerHTML = e
        })

      }
    }
  }
</script>

<style scoped>
  .apiContainer {
    padding: 5vh 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
    margin-bottom: 4vh;
  }
  button {
    height: 3rem;
    width: 6rem;
    margin: 0 2vw;
    outline: none;
    background-color: #616161;
    color: #fff;
    border: none;
    font-size: 0.75rem;
  }
  button:hover {
    cursor: pointer;
    background-color: #49bd88;
  }
  li {
    list-style: none;
  }
</style>
