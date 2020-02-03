<template>
  <div class="blog">
    <h1>Blog</h1>
    <div class="postContainer"
    v-for="(post, index) in posts"
    :key="index">
      <Post v-bind:post="post" />
    </div>
  </div>
</template>

<script>
  import Post from './Post.vue';

  const API_POST_URL = 'http://localhost:5000/api/posts';

  export default {
    name: 'Blog',
    components: {
      Post
    },
    data() {
      return {
        items: '',
        posts: []
      }
    },
    methods: {
      apiGetPosts: function() {
        fetch(API_POST_URL, {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(res => {
          return res.json()
        })
        .then(data => {
          data.forEach(post => {
            this.posts.push(post)
          })
        })
        .catch(e => {
          document.getElementById("output").innerHTML = e
        })

      }
    },
    created() {
      this.apiGetPosts();
    }
  }
</script>

<style scoped>
  .blog {
    padding: 5vh 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .postContainer {
    max-width: 1000px;
  }
  h1 {
    font-family: 'Julius Sans One', sans-serif;
    text-align: center;
    margin-bottom: 5vh;
  }
</style>
