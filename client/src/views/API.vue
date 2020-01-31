<template>
  <div class="apiContainer">
    <div class="buttonContainer">
      <button class="apiButton" v-on:click="apiGetPosts">API Get Cafes</button>
      <button class="apiButton">API Get Posts</button>
      <button class="apiButton">API Create Post</button>
    </div>
    <!-- <p id="output">nothing yet...</p> -->
    <li v-for="cafe in cafes" v-bind:key="cafe.id">
      <Cafe v-bind:cafe="cafe" />
    </li>
    <!-- <Post v-for="cafe in cafes"
      v-bind:title="cafe.name"
      v-bind:key="cafe.id" /> -->
    <Post />
  </div>
</template>

<script>
  import Post from '../components/Post.vue';
  import Cafe from '../components/Cafe.vue';

  const API_CAFE_URL = 'http://localhost:5000/api/cafes';
  // const API_POST_URL = 'http://localhost:5000/api/posts';

  export default {
    name: 'API',
    components: {
      Post,
      Cafe
    },
    data() {
      return {
        cafes: []
      }
    },
    methods: {
      apiGetPosts: function() {
        if (this.cafes.length) {
          return;
        }
        fetch(API_CAFE_URL, {
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

      }
    }
  }
</script>

<style scoped>
  .apiContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .buttonContainer {
    display: flex;
    justify-content: space-between;
    margin: 4rem 2rem;
    width: 30vw;
    align-self: center;
  }
  button {
    height: 3rem;
    width: 6rem;
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
