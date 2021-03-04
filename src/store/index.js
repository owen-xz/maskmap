import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    area: [],
    stores: [],
    currCity: '臺北市',
    currDistrict: '中正區',
    keywords: '',
    currStoreId: ''
  },
  mutations: {
    SETAREA(state, payload){
      state.area = payload;
    },
    SETSTORES(state, payload){
      state.stores = payload;
    },
    SETCURRCITY(state, payload){
      state.currCity = payload;
    },
    SETCURRDISTRICT(state, payload){
      state.currDistrict = payload;
    },
    SETKEYWORDS(state, payload){
      state.keywords = payload;
    },
    SETCURRSTOREID(state, payload){
      state.currStoreId = payload;
    }
  },
  actions: {
    getArea(context){
      axios.get('https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json').then((response) => {
        context.commit('SETAREA', response.data);
      });
    },
    getStores(context){
      axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json').then((response) => {
        const data = response.data.features.map(element => ({
          ...element.properties,
          latitude: element.geometry.coordinates[0],
          longitude: element.geometry.coordinates[1]
        }));
        context.commit('SETSTORES', data);
      })
    }
  },
  getters: {
    cityList(state){
      return state.area.map(element => element.name);
    },
    districtList(state){
      return state.area.find(element => element.name === state.currCity)?.districts || [];
    },
    filterStores(state){
      const filterStores = state.stores.filter(element => element.county === state.currCity && element.town === state.currDistrict);     
      return state.keywords
      ? filterStores.filter(element => element.name.includes(state.keywords))
      : filterStores;
    }
  },
  modules: {
  }
})
