<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4">
        <Sidebar @chooseStore="openPopup"></Sidebar>
      </div>
      <div class="col-lg-8">
        <Map ref="map"></Map>
      </div>
    </div>
    <Lightbox></Lightbox>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Sidebar from './components/Sidebar.vue';
import Lightbox from './components/Lightbox.vue';
import Map from './components/Map.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Lightbox,
    Map
  },
  methods: {
    ...mapActions(['getArea', 'getStores']),
    openPopup(id){
      this.$refs.map.openPopup(id);
    }
  },
  mounted() {
    this.getArea();
    this.getStores();
  },
}
</script>

<style lang="scss">
</style>
