<template>
  <div class="about">
    <h1>What is this place?</h1>
    <p></p>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>
  .about {
    padding: 5vh 10vw;
    padding-bottom: 12vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h1 {
    font-family: 'Julius Sans One', sans-serif;
    text-align: center;
    margin-bottom: 6vh;
  }
  p {
    line-height: 1.6em;
  }
</style>
