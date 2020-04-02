<template>
  <div class="apiContainer">
    <div class="buttonContainer">
      <button class="apiButton" v-on:click="apiGetUsers">Get Users</button>
      <button class="apiButton" v-on:click="apiGetPosts">Get Posts</button>
      <button class="apiButton" v-on:click="showCreatePost">Create New Post</button>
    </div>
    <div class="apiCreatePost" v-if="creatingNewPost && !submitted">
      <h4>New Post</h4>
      <!-- onkeydown="return event.key != 'Enter';" -->
      <form id="newPostForm" v-on:submit.prevent="apiNewPost">
        <div class="inputContainer">
          <input type="text" name="title" placeholder="Title"><br>
        </div>
        <div class="inputContainer">
          <textarea name="content" form="newPostForm" placeholder="Content"></textarea><br>
        </div>
        <div class="inputContainer">
          <input type="text" name="tags" placeholder="tags"><br>
        </div>
        <input type="submit" value="Create Post">
      </form>
    </div>
    <p id="output"></p>
    <div class="apiOutput">
      <li v-for="user in users" v-bind:key="user.id">
        <User v-bind:user="user" />
      </li>
      <li v-for="post in posts" v-bind:key="post.id">
        <Post v-bind:post="post" />
      </li>
    </div>
  </div>
</template>

<script>
  import User from '../components/User.vue';
  import Post from '../components/Post.vue';

  const API_USERS_URL = window.location.hostname === 'localhost' ?
    'http://' + window.location.hostname + ':5000/api/users' :
    'https://' + window.location.host + '/api/users';
  const API_POSTS_URL = window.location.hostname === 'localhost' ?
    'http://' + window.location.hostname + ':5000/api/posts' :
    'https://' + window.location.host + '/api/posts';
  // const API_POST_URL = 'http://localhost:5000/api/posts';

  export default {
    name: 'API',
    components: {
      Post,
      User
    },
    data() {
      return {
        users: [],
        posts: [],
        creatingNewPost: false,
        submitted: false
      }
    },
    methods: {
      showCreatePost: function() {
        document.getElementById("output").innerHTML = '';
        this.creatingNewPost = true;
        this.submitted = false;
        if (this.posts.length) {
          this.posts = [];
        }
        if (this.users.length) {
          this.users = [];
        }
      },
      apiNewPost: function() {
        const newPostInfo = {
          title: document.getElementsByName("title")[0].value,
          content: document.getElementsByName("content")[0].value,
          tags: document.getElementsByName("tags")[0].value
        }
        fetch(API_POSTS_URL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newPostInfo)
        })
          .then(res => {
            if (res.status === 201) {
              res.json().then(data => {
                var output = 'New post created: ' + data.title;
                this.submitted = true;
                document.getElementById("output").innerHTML = output;
              });
            }
          })
          .catch(e => {
            document.getElementById("output").innerHTML = e
          })
      },
      apiGetUsers: function() {
        document.getElementById("output").innerHTML = '';
        this.creatingNewPost = false;
        if (this.posts.length) {
          this.posts = [];
        }
        if (this.users.length) {
          return;
        }

        fetch(API_USERS_URL, {
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
            this.users.push(item)
          })
        })
        .catch(e => {
          document.getElementById("output").innerHTML = e
        })

      },
      apiGetPosts: function() {
        document.getElementById("output").innerHTML = '';
        this.creatingNewPost = false;
        if (this.users.length) {
          this.users = [];
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

  h4 {
    font-family: 'Julius Sans One', sans-serif;
    margin-bottom: 5vh;
    font-size: 1.75rem;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-width: 300px;
    align-items: center;
  }
  .inputContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  input:-webkit-autofill, input:-webkit-autofill:focus, input:-webkit-autofill:hover {
    -webkit-box-shadow: inset 0 0 0px 1000px #fff !important;
  }

  /* Color A (unfocused) */
  input[type=text], textarea, input[type=submit] {
    color: #787878;
    border: 1px solid #9f9f9f;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #787878;
  }
  /* Color B (focused) */
  input[type=text]:focus, textarea:focus, input[type=submit]:hover {
    color: #29ad6e;
    border: 1px solid #29ad6e;
  }
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #29ad6e;
  }

  input[type=text], textarea {
    height: 3rem;
    text-align: left;
    transition: border 0.5s, color 0.5s;
    outline: none;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #a8a8a8;
    padding: 10px 20px;
    background-color: #fff;
    font-size: 0.9rem;
    width: 50vw;
    flex: 4 4 300px;
  }
  input[type=text] {
    height: 3rem;
    font-size: 1.25rem;
  }
  textarea {
    height: 10rem;
    font-size: 0.9rem;
  }
  input[type=text]:focus, input[type=textarea]:focus {
    border: 1px solid #29ad6e;
    caret-color: #29ad6e;
  }
  input[type=submit] {
    outline: none;
    border: none;
    height: 3rem;
    width: 8rem;
    margin-top: 20px;
    box-sizing: border-box;
    border: 1px solid #9f9f9f;
    border-radius: 6px;
    font-size: 0.9rem;
    transition: color 0.3s, background 0.3s, border 0.3s;
  }
  input[type=submit]:hover {
    cursor: pointer;
  }
  #output {
    margin-top: 40px;
    color: #b33c59;
  }
</style>
