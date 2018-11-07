import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const carTypes = ['type A', 'type B', 'type C']
const brands = ['Mercedes', 'KIA', 'Suzuki']
const models = ['X11', 'Zephyr', 'Swift']
const buildYears = ['2011', '2008', '1996']

// DEBUG FUNCTION
function randomFrom (array) {
  return array[Math.floor(Math.random() * array.length)]
}

let counter = 1

// DEBUG FUNCTION
function createRandomVehicle (name) {
  return {
    name,
    id: counter++,
    type: randomFrom(carTypes),
    brand: randomFrom(brands),
    model: randomFrom(models),
    buildYear: randomFrom(buildYears)
  }
}

export default new Vuex.Store({
  state: {
    dummy: 0,
    vehicles: [
      createRandomVehicle('Bigass car'),
      createRandomVehicle('Truck'),
      createRandomVehicle('Van')
    ]
  },
  mutations: {
    addRandomVehicle (state) { // DEBUG MUTATION
      const vehicle = createRandomVehicle('PIETJE')
      state.vehicles.push(vehicle)
    },
    registerVehicle (state, vehicle) {
      state.vehicles.push(vehicle)
    }
  },
  actions: {

  }
})
