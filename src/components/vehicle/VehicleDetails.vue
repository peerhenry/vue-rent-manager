<template lang="html">
  <div>
    <div>
      <h2>{{ vehicle.name }}</h2>
      <p>Brand: {{ vehicle.brand }}</p>
      <p>Model: {{ vehicle.model }}</p>
      <p>Type: {{ vehicle.type }}</p>
      <p>Build year: {{vehicle.buildYear}}</p>
    </div>
  </div>
</template>

<script lang="js">
  export default  {
    name: 'VehicleView',
    props: ['id'],
    mounted() {
      
    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
      vehicle: function() {
        return this.$store.getters.getVehicleById(this.id)
      }
    }
}
</script>

<style scoped lang="scss">

</style>
