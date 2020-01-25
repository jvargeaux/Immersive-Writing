<template>
  <div class="post">
    <div class="post-header">
      <h3 class="post-title">{{post.title}}</h3>
      <h5 class="post-location">{{post.location}}</h5>
    </div>
    <h6 class="post-date">{{post.date}}</h6>
    <p class="post-content">{{post.content}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      post: {
        title: String,
        location: String,
        date: String,
        content: String
      }
    }
  }
</script>

<style scoped>
  .post {
    display: flex;
    flex-direction: column;
    color: #e8e8e8;
    padding: 60px 120px;
  }
  .post-header {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-bottom: 20px;
  }
  .post-title {
    flex: 4;
  }
  .post-location {
    flex: 1;
  }
  .post-date {
  }
  .post-content {
    padding-top: 40px;
  }

  h3 { /* Title */
    color: #282828;
    font-size: 24px;
  }
  h5 { /* Location */
    color: #51a26f;
    font-size: 18px;
  }
  h6 { /* Date */
    color: #afafaf;
    font-size: 16px;
  }
  p { /* Content */
    color: #5d5d5d;
  }
</style>
