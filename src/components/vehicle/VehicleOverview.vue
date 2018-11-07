<template lang="html">
  <b-container>

    <b-row class="mb-3">
      <b-col>
        <h1>
          Vehicle Overview
        </h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item v-for="v in vehicles" @click="viewVehicle(v.id)" class="vehicle-list-item">
            Name: {{v.name}}, Type: {{v.type}}, Model: {{v.model}}
          </b-list-group-item>
        </b-list-group>
        <b-button :variant="'primary'" @click="createVehicle">New vehicle</b-button>
      </b-col>
    </b-row>

  </b-container>
</template>

<script lang="js">
  export default  {
    name: 'VehicleOverview',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
      createVehicle: function(event) {
        this.$store.commit('addRandomVehicle') // DEBUG
      },
      viewVehicle: function(id) {
        console.log('Got to view vehicle, ', id)
      }
    },
    computed: {
      vehicles() {
        return this.$store.state.vehicles;
      }
    }
}
</script>

<style scoped lang="scss">
.vehicle-list-item{
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
}
</style>
