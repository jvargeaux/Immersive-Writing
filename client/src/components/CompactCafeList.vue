<template>
  <div>
    <div class="cafeItem"
    v-for="(cafe, index) in cafes"
    :key="index"
    v-on:click.capture="toggleExpand(index)"
    >
      <CompactCafe v-if="!cafe.expanded" v-bind:cafe="cafe" />
      <Cafe v-if="cafe.expanded" v-bind:cafe="cafe" />
    </div>

  </div>
</template>

<script>
  import Cafe from './Cafe.vue'
  import CompactCafe from './CompactCafe.vue'

  export default {
    name: 'CompactCafeList',
    components: {
      Cafe,
      CompactCafe
    },
    data() {
      return {
        cafes: [
          {
            name: "ABC Cafe",
            city: "Shibuya",
            ratings: {
              overall: 5,
              cleanliness: 4,
              coffee: 5,
              food: 4,
              usability: 5,
              price: 2
            },
            features: {
              wifi: true,
              seats: 34,
              water: true
            },
            location: {
              station: "Shibuya",
              line: "JR Yamanote, Keio Inokashira",
              minsFromStation: 4
            },
            posts: {
              date: "Wednesday, November 6, 2019",
              visitRating: 5,
              order: "Cafe Mocha",
              textContent: "This was a great visit."
            },
            expanded: false
          },
          {
            name: "DEF Cafe",
            city: "Ebisu",
            ratings: {
              overall: 5,
              cleanliness: 4,
              coffee: 5,
              food: 4,
              usability: 5,
              price: 2
            },
            features: {
              wifi: true,
              seats: 34,
              water: true
            },
            location: {
              station: "Ebisu",
              line: "JR Yamanote, Hibiya",
              minsFromStation: 7
            },
            posts: {
              date: "Wednesday, November 6, 2019",
              visitRating: 5,
              order: "Cafe Mocha",
              textContent: "This was a great visit."
            },
            expanded: false
          }

            // title: "DEF Cafe",
            // date: "Friday, November 8, 2019",
            // location: "Sapporo",
            // content: "Duis molestie ex non nisi congue, at iaculis nisl sodales. In efficitur ultricies vulputate. Praesent sit amet orci finibus, cursus libero ac, ultrices nulla. Phasellus at pharetra eros, quis pharetra nibh. Donec et vestibulum nibh, in auctor tortor. Aenean mollis, lectus eget suscipit tempor, lorem enim mattis quam, nec porttitor est diam eu massa. Nunc rutrum sollicitudin augue. Donec et luctus magna. Sed sed sem ex. Cras feugiat quis turpis eu tristique. Donec sit amet pulvinar dui. Nam gravida dolor odio, at dignissim leo eleifend in. Curabitur pharetra eu ligula sed elementum. Suspendisse potenti."

        ]
      }
    },
    methods: {
      toggleExpand: function (index) {
        this.cafes[index].expanded = !this.cafes[index].expanded;
      }
    }
  }
</script>

<style scoped>
  .cafeItem {
    cursor: pointer;
  }
</style>
