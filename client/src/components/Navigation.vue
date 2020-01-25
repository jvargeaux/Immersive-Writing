<template>
  <div class="nav">
    <h1>Cafe Tour Tokyo</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/list">Cafe List</router-link></li>
        <li><router-link to="/map">Map</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    props: {
    }
  }
</script>

<style scoped>

  .nav {
    width: 100vw;
    background-image: url("../assets/cafe1.jpg");
    background-position: 50% 75%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #18473f;
  }

  h1 {
    font-size: 48px;
    color: #fff;
    padding-top: 90px;
    text-align: center;
  }

  a {
    color: inherit;
  }

  nav {
    padding-top: 90px;
    padding-bottom: 60px;
  }

  nav ul {
    display: flex;
    justify-content: center;
  }

  nav ul li {
    list-style-type: none;
  }

  nav ul li a {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 12px 36px;
    background-color: rgba(154,154,154,.5);
  }

  nav ul li a:hover {
    color: #131313;
    background-color: #f9f9f9;
    cursor: pointer;
  }

</style>
