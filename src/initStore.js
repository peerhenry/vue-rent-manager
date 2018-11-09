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

export default function initStore (store) {
  const vehicles = [
    createRandomVehicle('Bigass car'),
    createRandomVehicle('Truck'),
    createRandomVehicle('Van')
  ]

  vehicles.forEach(v => store.commit('registerVehicle', v))
}
