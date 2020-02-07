<template>
  <div class="loginForm">
    <h4>Login</h4>
    <p class="hint">For test purposes, use "fakeAdmin@gmail.com" for email and "fake" for password.</p>
    <form v-on:submit.prevent="loginClick">
      <div class="inputContainer">
        <span>Email: </span><input type="text" name="email"><br>
      </div>
      <div class="inputContainer">
        <span>Password: </span><input type="password" name="password"><br>
      </div>
      <input type="submit" value="Log In">
    </form>
    <p id="output"></p>
  </div>
</template>

<script>
  const LOGIN_URL = window.location.hostname + ':5000/login';

  export default {
    name: 'Login',
    components: {

    },
    data() {
      return {

      }
    },
    methods: {
      loginClick: function() {
        const loginInfo = {
          email: document.getElementsByName("email")[0].value,
          password: document.getElementsByName("password")[0].value
        }
        fetch(LOGIN_URL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginInfo)
        })
          .then(res => {
            if (res.status === 201) {
              console.log(res);
              res.json().then(data => {
                  document.cookie = data.token;
                  // document.getElementById("output").innerHTML = data.msg;
                  location.replace('./');
                })
                .catch(err => console.log(err));
            }
            else {
              res.text()
                .then(data => {
                  document.getElementById("output").innerHTML = data;
                  console.log("my cookies: " + document.cookie);
                })
                .catch(err => console.log(err));
            }
          })
          .catch(err => console.log(err));
      }
    }
  }
</script>

<style scoped>
  .loginForm {
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
    padding-bottom: 12vh;
    text-align: center;
    align-items: center;
  }
  h4 {
    font-family: 'Julius Sans One', sans-serif;
    margin-bottom: 5vh;
    font-size: 1.75rem;
  }
  .hint {
    font-size: 0.9rem;
    color: #919191;
    margin-bottom: 2vh;
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
  .inputContainer span {
    margin-right: 20px;
    flex: 1 1 80px;
    text-align: right;
  }
  input:-webkit-autofill, input:-webkit-autofill:focus, input:-webkit-autofill:hover {
    -webkit-box-shadow: inset 0 0 0px 1000px #fff !important;
  }

  /* Color A (unfocused) */
  input[type=text], input[type=password], input[type=submit] {
    color: #787878;
    border: 1px solid #9f9f9f;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #787878;
  }
  /* Color B (focused) */
  input[type=text]:focus, input[type=password]:focus, input[type=submit]:hover {
    color: #29ad6e;
    border: 1px solid #29ad6e;
  }
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #29ad6e;
  }

  input[type=text], input[type=password] {
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
    width: 30vw;
    flex: 4 4 300px;

  }
  input[type=text]:focus, input[type=password]:focus {
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
