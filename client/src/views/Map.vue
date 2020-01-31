<template>
  <div class="map">
    <h1>This is a map page</h1>
    <GoogleMap />
  </div>
</template>

<script>
  import GoogleMap from '../components/GoogleMapsAPI.vue'

  export default {
    name: 'Map',
    components: {
      GoogleMap
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
