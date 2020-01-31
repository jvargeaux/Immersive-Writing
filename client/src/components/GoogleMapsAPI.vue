<!DOCTYPE html>

<template>
  <div>
    <button v-on:click="initMap">Init Map</button>
    <div id="map"></div>
  </div>
</template>

<!-- Google Maps API -->
<!-- // API Key:  AIzaSyCnxRncKc-2cpSPTHDOdXtaUdQB4fUV8Qk -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnxRncKc-2cpSPTHDOdXtaUdQB4fUV8Qk&callback=initMap"
async defer></script>

<script>
  var map;

  export default {
    name: 'GoogleMap',
    components: {

    },
    data() {
      return {
        map: null
      }
    },
    methods: {
      initMap: function() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
        this.map = map;
      }
    },
    mounted() {
      this.initMap();
    }
  }

</script>

<style scoped>
  #map {
    height: 50vh;
    z-index: 99;
  }
</style>
