<template>
  <div class="user">
    <h3 class="name">{{user.name}}</h3>
    <h5 class="email">{{user.email}}</h5>
    <h6 class="dateJoined">{{user.date}}</h6>
  </div>
</template>

<script>
  export default {
    name: 'User',
    props: {
      user: {
        email: String,
        name: String,
        date: String
      }
    }
  }
</script>

<style scoped>
  .user {
    display: flex;
    flex-direction: column;
    color: #e8e8e8;
    padding-bottom: 120px;
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
