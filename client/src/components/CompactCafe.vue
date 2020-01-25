<template>
  <div class="compact-cafe">
    <div class="header">
      <h4>{{ cafe.name }}</h4>
      <h6>{{ cafe.city }}</h6>
    </div>
    <div class="rating">
      <p>Rating: {{ cafe.ratings.overall }}</p>
      <p>{{ cafe.posts.date }}</p>
    </div>
    <div class="location">
      <p>{{ cafe.location.station }} Station</p>
      <p>{{ cafe.location.line }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CompactCafe',
    components: {

    },
    props: {
      cafe: {
        name: String,
        city: String,
        ratings: {
          overall: 0
        },
        location : {
          station: String,
          line: String
        },
        posts: {
          date: String
        }
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  /* FONT SIZES */
  h4 { font-size: 1.25rem;}
  h6 { font-size: 0.75rem;}
  p { font-size: 0.9rem;}

  .compact-cafe {
    display: flex;
    flex-direction: row;
    padding: 1rem 1rem;
    margin: 1rem 0;
    background-color: #dfdfdf;
  }
  .header, .rating, .location {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }
  .header {
    flex: 2;
  }
  .rating, .location {
    flex: 1;
  }
</style>
