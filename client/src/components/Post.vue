<template>
  <div class="post">
    <div class="post-header">
      <h3 class="post-title">{{post.title}}</h3>
      <h5 class="post-location">{{post.location}}</h5>
    </div>
    <h6 class="post-date">{{ formattedDate }}</h6>
    <p class="post-content">{{post.content}}</p>
    <h6 class="post-tags">Tags: {{post.tags}}</h6>
  </div>
</template>

<script>
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const formatDate = (date) => {
    let d = new Date(date);
    return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} | ${d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}`;
  };

  export default {
    name: 'Post',
    props: {
      post: {
        title: String,
        location: String,
        date: String,
        content: String,
        comments: []
      }
    },
    data() {
      return {
        formattedDate: formatDate(this.post.date)
      }
    }
  }
</script>

<style scoped>
  .post {
    display: flex;
    flex-direction: column;
    color: #e8e8e8;
    padding-bottom: 120px;
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
    white-space: pre-wrap;
  }
  .post-tags {
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
