import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let counter = 0

export default new Vuex.Store({
  state: {
    dummy: 0,
    vehicles: []
  },
  getters: {
    getVehicleById: (state) => (id) => {
      return state.vehicles.find(v => v.id === id)
    }
  },
  mutations: {
    registerVehicle (state, vehicle) {
      vehicle.id = counter++
      state.vehicles.push(vehicle)
    }
  },
  actions: {

  }
})
