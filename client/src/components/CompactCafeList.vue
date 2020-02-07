<template>
  <div>
    <p id="output"></p>
    <div class="cafeItem"
    v-for="(cafe, index) in cafes"
    :key="index"
    v-on:click.capture="toggleExpand(index)"
    >
      <Cafe v-if="expanded === index" v-bind:cafe="cafe" />
      <CompactCafe v-else v-bind:cafe="cafe" />
    </div>

  </div>
</template>

<script>
  import Cafe from './Cafe.vue';
  import CompactCafe from './CompactCafe.vue';

  const API_CAFE_URL = window.location.hostname + '/api/cafes';

  export default {
    name: 'CompactCafeList',
    components: {
      Cafe,
      CompactCafe
    },
    data() {
      return {
        expanded: null,
        cafes: [
          // {
          //   name: "DEF Cafe",
          //   city: "Ebisu",
          //   ratings: {
          //     overall: 5,
          //     cleanliness: 4,
          //     coffee: 5,
          //     food: 4,
          //     usability: 5,
          //     price: 2
          //   },
          //   features: {
          //     wifi: true,
          //     seats: 34,
          //     water: true
          //   },
          //   location: {
          //     station: "Ebisu",
          //     line: "JR Yamanote, Hibiya",
          //     minsFromStation: 7
          //   },
          //   posts: {
          //     date: "Wednesday, November 6, 2019",
          //     visitRating: 5,
          //     order: "Cafe Mocha",
          //     textContent: "This was a great visit."
          //   },
          //   expanded: false
          // }
        ]
      }
    },
    methods: {
      toggleExpand: function (index) {
        if (this.expanded === index) {
          this.expanded = null;
          return;
        }
        this.expanded = index;
      },
      apiGetCafes: function() {
        fetch(API_CAFE_URL, {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(res => {
          return res.json()
        })
        .then(data => {
          data.forEach(cafe => {
            this.cafes.push(cafe)
          })
        })
        .catch(e => {
          document.getElementById("output").innerHTML = e
        })

      }
    },
    created() {
      this.apiGetCafes();
    }
  }
</script>

<style scoped>
  .cafeItem {
    cursor: pointer;
  }
</style>
