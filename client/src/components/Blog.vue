<template>
  <div class="blog">
    <Post v-bind:post="cafes[0]" />
    <Post v-bind:post="cafes[1]" />
    <button class="apiButton" v-on:click="apiGetPosts">API Get Posts</button>
    <p id="output">nothing yet...</p>
  </div>
</template>

<script>
  import Post from './Post.vue';

  export default {
    name: 'Blog',
    components: {
      Post
    },
    methods: {
      apiGetPosts: function() {
        document.getElementById("output").innerHTML = "we got it";
      }
    },
    data() {
      return {
        cafes: [
          {
            title: "ABC Cafe",
            date: "Wednesday, November 6, 2019",
            location: "Shibuya",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis faucibus sem, at dapibus velit. In ligula ipsum, ornare nec est eget, rhoncus convallis lacus. Vestibulum a mattis nibh, eget pharetra lacus. Nam massa lacus, mattis at urna sed, sollicitudin tincidunt sem. Proin sit amet ipsum a neque ullamcorper ullamcorper. Cras iaculis mauris dolor, mattis dictum ante efficitur at. Nunc sagittis ex ut iaculis maximus. Aliquam consequat metus nisi, eget lobortis nisl pharetra vitae. Cras lacinia, ipsum sit amet luctus ullamcorper, quam lorem varius lorem, in placerat lacus libero sed ipsum. Integer condimentum purus mauris, ac vulputate nisi tempor ac."
          },
          {
            title: "DEF Cafe",
            date: "Friday, November 8, 2019",
            location: "Sapporo",
            content: "Duis molestie ex non nisi congue, at iaculis nisl sodales. In efficitur ultricies vulputate. Praesent sit amet orci finibus, cursus libero ac, ultrices nulla. Phasellus at pharetra eros, quis pharetra nibh. Donec et vestibulum nibh, in auctor tortor. Aenean mollis, lectus eget suscipit tempor, lorem enim mattis quam, nec porttitor est diam eu massa. Nunc rutrum sollicitudin augue. Donec et luctus magna. Sed sed sem ex. Cras feugiat quis turpis eu tristique. Donec sit amet pulvinar dui. Nam gravida dolor odio, at dignissim leo eleifend in. Curabitur pharetra eu ligula sed elementum. Suspendisse potenti."
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .blog {

  }
</style>
