<template lang="html">
  <div>
    <h1>
      Vehicle {{ vehicle.id }}
    </h1>
    <div>
      <h2>Name: {{ vehicle.name }}</h2>
      <p>Model: {{ vehicle.model }}</p>
      <p>Type: {{ vehicle.type }}</p>
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
