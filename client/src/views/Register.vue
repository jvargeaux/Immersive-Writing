<template>
  <div class="loginForm">
    <h4>Create an Account</h4>
    <p id="successOutput" class="hint"></p>
    <div v-if="!submitted">
      <p class="hint">* Passwords must contain at least 4 characters.</p>
      <form v-on:submit.prevent="registerClick">
        <div class="inputContainer">
          <span>Email (required): </span><input type="text" name="email"><br>
        </div>
        <div class="inputContainer">
          <span>Password (required): </span>
          <input type="password" name="password"><br>
        </div>
        <div class="inputContainer">
          <span>Password Confirm (required): </span><input type="password" name="passwordRepeat"><br>
        </div>
        <div class="inputContainer">
          <span>Name (optional): </span><input type="text" name="name"><br>
        </div>
        <input type="submit" value="Sign Up">
      </form>
      <p id="output"></p>
    </div>
  </div>
</template>

<script>
  const REGISTER_URL = 'http://localhost:5000/register';

  export default {
    name: 'Register',
    components: {

    },
    data() {
      return {
        submitted: false
      }
    },
    methods: {
      registerClick: function() {
        const registerInfo = {
          email: document.getElementsByName("email")[0].value,
          password: document.getElementsByName("password")[0].value,
          passwordRepeat: document.getElementsByName("passwordRepeat")[0].value,
          name: document.getElementsByName("name")[0].value
        }
        fetch(REGISTER_URL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(registerInfo)
        })
          .then(res => {
            if (res.status === 201) {
              res.json().then(data => {
                var output = 'User added:';
                if (data.name) {
                  output += '<br>Name: ' + data.name;
                }
                output += '<br>Email: ' + data.email;
                this.submitted = true;
                document.getElementById("successOutput").innerHTML = output;
              });
            }
            res.json().then(data => {
              console.log(data);
              var output = '';
              if (data) {
                data.forEach(item => {
                  output += item + '<br>';
                });
              }
              document.getElementById("output").innerHTML = output;
            })
          })
          .catch(err => {
            console.log(err);
          });
      },
      displaySucess: function(data) {
        console.log(data);
      }
    }
  }
</script>

<style scoped>
  .loginForm {
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
    margin-bottom: 12vh;
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
    max-width: 800px;
    min-width: 400px;
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
    flex: 1 1 200px;
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
    width: 25vw;
    flex: 3 3 300px;

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
  }
  input[type=submit]:hover {
    cursor: pointer;
  }
  #output {
    margin-top: 40px;
    color: #b33c59;
  }
</style>
