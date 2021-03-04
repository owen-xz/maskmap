<template>
  <div class="sidebar border">
    <div class="row g-0">
      <div class="col-sm-6 col-lg-12">
        <div class="selectbox p-3 border-bottom bg-light h-100">
          <div class="row">
            <div class="col-6 col-sm-12">
              <div class="form-group row align-items-center mb-sm-3 g-0">
                <div class="col-5 col-sm-4">
                  <label for="city">縣市</label>
                </div> 
                <div class="col-7 col-sm-8">
                  <select name="city" id="city" class="form-select" v-model="currCity">
                    <option v-for="item in cityList" :key="item.id" :value="item">{{ item }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-12">
              <div class="form-group row align-items-center g-0">
                <div class="col-5 col-sm-4">
                  <label for="district">行政區</label>
                </div>
                
                <div class="col-7 col-sm-8">
                  <select name="district" id="district" class="form-select" v-model="currDistrict">
                    <option v-for="item in districtList" :key="item.id" :value="item.name">{{ item.name }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      <div class="col-sm-6 col-lg-12">
        <div class="searchbox p-3 border-bottom bg-light h-100">
          <h3 class="d-none d-sm-block">關鍵字搜尋：</h3>
          <input type="text" class="form-control" placeholder="請輸入關鍵字" v-model="keywords">
        </div>
      </div>
    </div> 
    <div class="resultbox">
      <div class="row g-0">
        <div class="result p-3 border col-6 col-md-4 col-lg-12 col-xl-6" v-for="item in filterStores" :key="item.id" @click="$emit('chooseStore', item.id)">
          <h3 v-html="keywordsHighlight(item.name)"></h3>
          <p class="mb-1">大人口罩: {{ item.mask_adult }} 個</p>
          <p class="mb-1">小孩口罩: {{ item.mask_child }} 個</p>
          <button class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#storeModal" @click="setCurrStoreId(item.id)">詳細資料</button>
          <p class="mb-0">最後更新時間: <br>{{ item.updated }}</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    currCity: {
      get(){
        return this.$store.state.currCity;
      },
      set(value){
        this.$store.commit('SETCURRCITY', value);
      }
    },
    currDistrict: {
      get(){
        return this.$store.state.currDistrict;
      },
      set(value){
        this.$store.commit('SETCURRDISTRICT', value);
      }
    },
    keywords: {
      get(){
        return this.$store.state.keywords;
      },
      set(value){
        this.$store.commit('SETKEYWORDS', value);
      }
    },
    ...mapGetters(['cityList', 'districtList', 'filterStores'])
  },
  methods: {
    keywordsHighlight(val){
      return val.replace(new RegExp(this.keywords, 'g'), `<span class="highlight">${this.keywords}</span>`);
    },
    setCurrStoreId(id){
      this.$store.commit('SETCURRSTOREID', id);
    }
  },
  watch: {
    districtList(list){
      const [firstDistrict] = list;
      this.currDistrict = firstDistrict.name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.sidebar{
  height: 100vh;
  overflow: hidden;
}
.resultbox{
  overflow:scroll;
  height: calc(100% - 232px);
}
@media(max-width: 992px){
  .sidebar{
    height: 50vh;
  }
  .resultbox{
    height: calc(100% - 125px);
  }
}
@media(max-width: 576px){
  .resultbox{
    height: calc(100% - 142px);
  }
}
.highlight{
  color: red;
}
.result{
  cursor: pointer;
  transition: all 0.3s;
}
.result:hover{
  background-color: #00cc99;
}
.detailBtn{
  height: 70px;
  width: 70px;
}
</style>
