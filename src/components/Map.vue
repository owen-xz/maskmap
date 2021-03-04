<template>
  <div class="map" id="mask-map" @click="clickmap($event)"></div>
</template>

<script>
import L from 'leaflet';
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      map: {},
      markers: []
    }
  },
  computed: {
    ...mapState(['currDistrict']),
    ...mapGetters(['filterStores'])
  },
  methods: {
    addMarker(item){
      const marker = L.marker([item.longitude, item.latitude]).addTo(this.map).bindPopup(`
        <h5>${item.name}</h5>
        <p class="m-0 mb-1">大人口罩: ${item.mask_adult} 個</p>
        <p class="m-0 mb-2">小孩口罩: ${item.mask_child} 個</p>
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#storeModal" data-id="${item.id}">詳細資料</button>
      `);
      marker.id = item.id;
      marker.lng = item.longitude;
      marker.lat = item.latitude;
      this.markers.push(marker);
    },
    clearMarkers(){
      this.map.eachLayer(layer => {
        if(layer instanceof L.Marker){
          this.map.removeLayer(layer);
        }
        this.markers.length = 0;
      });
    },
    openPopup(id){
      const marker = this.markers.find(element => element.id === id);
      this.map.flyTo(new L.LatLng(marker.lng, marker.lat), 15);
      marker.openPopup();
      this.setCurrStoreId(marker.id);
    },
    setCurrStoreId(id){
      this.$store.commit('SETCURRSTOREID', id);
    },
    clickmap(event){
      let id = event.target.dataset.id;
      if(id){
        this.setCurrStoreId(id);
      }
    }
  },
  watch: {
    currDistrict(val){
      const districtInfo = this.$store.getters.districtList.find(item => item.name === val);
      this.map.panTo(new L.LatLng(districtInfo.latitude, districtInfo.longitude));
    },
    filterStores(){
      this.clearMarkers();
      this.filterStores.forEach(element => this.addMarker(element));
    }
  },
  mounted() {
    this.map = L.map('mask-map', {
      center: [25.044214, 121.524725],
      zoom: 14
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.map);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map{
  height: 100vh;
}
@media(max-width: 992px){
  .map{
    height: 50vh;
  }
}

</style>
