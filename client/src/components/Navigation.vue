<template>
  <div id="navWrapper">
    <div class="nav" v-if="!navHidden">
      <div class="bgOverlay"></div>
      <div class="bg"></div>
      <div class="accountStatus" v-if="user">
        <h6>Hey, {{ user.name }}!</h6>
        <button v-on:click="logout">Logout</button>
      </div>
      <div class="accountStatus" v-else>
        <h6><a class="textLink" href=".#/login">Login</a> or <a class="textLink" href=".#/register">Create An Account</a></h6>
      </div>
      <a href="./"><h1>Title</h1></a>
      <nav>
          <div class="buttonWrapper"><router-link to="/" class="homeButton">Home</router-link></div>
          <div class="buttonWrapper"><router-link to="/about" class="aboutButton">About</router-link></div>
          <div class="buttonWrapper"><router-link to="/writingroom" class="">Writing Room</router-link></div>
          <li v-if="user && user.email === 'jvargeaux@gmail.com'"><router-link to="/api">API</router-link></li>
          <li v-if="user"><router-link to="/profile">Profile</router-link></li>
      </nav>
    </div>
    <div class="hideNavButtonWrapper">
      <button class="hideNavButton" v-on:click="hideNav"><font-awesome-icon icon="angle-down" v-if="navHidden" /><font-awesome-icon icon="angle-up" v-else /></button>
    </div>
  </div>
</template>

<script>
  const DASHBOARD_URL = window.location.hostname === 'localhost' ?
    'http://' + window.location.hostname + ':5000/dashboard' :
    'https://' + window.location.host + '/dashboard';

  export default {
    name: 'Navigation',
    data() {
      return {
        user: null,
        navHidden: false
      }
    },
    methods: {
      hideNav: function() {
        this.navHidden = !this.navHidden;
        this.$emit('nav-hide-toggled');
      },
      checkLoginStatus: function() {
        fetch(DASHBOARD_URL, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': document.cookie
          }
        })
         .then(res => res.json())
         .then(data => {
           console.log(data);
           this.user = data;
         })
         .catch(err => console.log(err));
      },
      logout: function() {
        document.cookie = null;
        location.reload();
      }
    },
    mounted() {
      this.checkLoginStatus();
    }
  }
</script>

<style scoped>

  .nav {
    width: 100vw;
    height: 20vh;
  }
  .bg {
    position: absolute;
    width: 100vw;
    height: 30vh;
    /* background-image: url(""); */
    background: #1b1b1b;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -99;
  }
  .bgOverlay {
    position: absolute;
    width: 100vw;
    height: 30vh;
    /* background: linear-gradient(0deg, rgba(80,80,80,.5), rgba(22,22,22,.75)); */
    z-index: -80;
  }

  .accountStatus {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    right: 5vw;
    top: 1vh;
  }

  .textLink {
    color: rgba(179,249,236,.75);
  }
  .textLink:hover {
    color: rgba(255,255,255,1);
  }

  h6 {
    text-align: center;
    margin-right: 2vw;
    font-size: 1.15rem;
    font-weight: 500;
    color: rgba(255,255,255,.75);
    text-shadow: 0px 0px 15px rgba(0,0,0,1);
    cursor: default;
  }
  button {
    outline: none;
    border: none;
    height: 2.5rem;
    width: 7rem;
    box-sizing: border-box;
    border: 1px solid #9f9f9f;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #b8b8b8;
    border: 1px solid #9f9f9f;
    background-color: rgba(0,0,0,.25);
    transition: color 0.3s, background 0.3s, border 0.3s;
  }
  button:hover {
    cursor: pointer;
    color: #e8e8e8;
    border: 1px solid #e8e8e8;
    background-color: rgba(0,0,0,.5);
  }

  h1 {
    font-family: 'Julius Sans One', sans-serif;
    font-size: 52px;
    color: #fff;
    text-shadow: 0px 0px 20px rgba(0,0,0,.5);
    padding-top: 4vh;
    padding-bottom: 4vh;
    text-align: center;
  }

  a {
    color: inherit;
  }

  nav {
    margin-bottom: 2vh;
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hideNavButtonWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hideNavButton {
    position: relative;
    text-align: center;
    color: #fff;
    background: #333;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transform: translateY(20px);
    z-index: 99;
  }

  .buttonWrapper a {
    font-family: 'Julius Sans One', sans-serif;
    font-size: 20px;
    margin: 0 10px;
    padding: 10px;
  }

  .buttonWrapper a:hover {
    color: #fff;
  }

  .homeButton, .aboutButton {

  }


</style>
