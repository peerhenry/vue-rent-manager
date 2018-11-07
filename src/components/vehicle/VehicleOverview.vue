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
        <b-button :variant="'primary'" @click="createVehicle" class="mb-3">Register new vehicle</b-button>
      </b-col>
    </b-row>

    <b-row>
      <div 
        v-for="v in vehicles"
        class="vehicle-card-container col-lg-4 col-md-6 col-sm-12">
        <b-card
          @click="viewVehicle(v.id)"
          class="vehicle-card"
          img-src="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg?v=51"
          :title="v.name"
          >
          <p>Type: {{v.type}}, Model: {{v.model}}</p>
          <div slot="footer">
            <b-button :variant="'primary'" class="vehicle-item-btn" @click.stop="editVehicle($event, v.id)">
              <font-awesome-icon icon="edit" />
            </b-button>
          </div>
        </b-card>
      </div>
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
        console.log('Go to view vehicle, ', id)
        this.$router.push({ name: 'vehicle', params: { id }})
      },
      editVehicle: function(event, id) {
        console.log('Go to edit vehicle, ', id)
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
.vehicle-card-container {
  padding-top: 15px;
  padding-bottom: 15px;
}

.vehicle-card {
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
}

.vehicle-item-btn{
  border-radius: 50%;
  float: right;
}
</style>
