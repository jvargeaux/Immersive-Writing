<template>
  <div class="about">
    <h1>What is this place?</h1>
    <p>Hi, I'm Jimmy. This is my personal blog. As you can probably tell from the very obvious title above, I love coffee.<br><br>I also have a lot of other interests, including music creation, digital art, video games, software development, psychology, and foreign cultures, just to name a few. I'm a go-wide-not-deep kind of guy, but I'm trying to be deeper.<br><br>I'm an American currently living in Tokyo, 26 years old at the time of writing this (born in 1993). I'm from the DC area, but also lived in LA for 6 years during my time at university. I grew up on three different continents, spending 3 years of my childhood in Austria and 2 years in the Philippines.<br><br>I'm super insecure and perfectionistic about everything in life, so naturally that spells disaster for posting content on the internet. But I'm giving it a shot anyway, hoping I can connect with the rest of the world, giving away the nuggets of wisdom I've picked up along my path and hoping to get some of yours too.<br><br>Let's cut out the BS in life and get to the good stuff.</p>
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
