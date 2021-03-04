<template>
  <div class="modal fade" id="storeModal" tabindex="-1" aria-labelledby="storeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content" v-if="currStore">
        <div class="modal-header">
          <h1 class="modal-title" id="storeModalLabel">{{ currStore.name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h2>營業時間</h2>
          <table class="table">
            <thead>
              <th></th>
              <th class="p-2" scope="col">一</th>
              <th class="p-2" scope="col">二</th>
              <th class="p-2" scope="col">三</th>
              <th class="p-2" scope="col">四</th>
              <th class="p-2" scope="col">五</th>
              <th class="p-2" scope="col">六</th>
              <th class="p-2" scope="col">日</th>
            </thead>
            <tbody>
              <tr>
                <th scope="col">早上</th>
                <td v-for="(item, index) in serviceTimes[0]" :key="index">{{ item }}</td>
              </tr>
              <tr>
                <th scope="col">中午</th>
                <td v-for="(item, index) in serviceTimes[1]" :key="index">{{ item }}</td>
              </tr>
              <tr>
                <th scope="col">下午</th>
                <td v-for="(item, index) in serviceTimes[2]" :key="index">{{ item }}</td>
              </tr>
            </tbody>
          </table>
          <h2>地址: {{ currStore.address }}</h2>
          <h2>電話: {{ currStore.phone }}</h2>
          <h2>備註: {{ currStore.note }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currStore(){
      return this.$store.state.stores.find(element => element.id === this.$store.state.currStoreId);
    },
    serviceTimes(){
      let serviceTimes = this.currStore.service_periods;
      serviceTimes = serviceTimes.replace(/N/g, 'O').replace(/Y/g, 'X');
      return [serviceTimes.slice(0, 7).split(''), serviceTimes.slice(7, 14).split(''), serviceTimes.slice(14, 21).split('')]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2{
  font-size: 18px;
  font-weight: bold;
}
</style>
