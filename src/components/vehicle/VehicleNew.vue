<template lang="html">
<b-container>
  <h1>
    Register Vehicle
  </h1>

  
  <b-form>
    <b-form-group id="name-group"
                  label="Name:"
                  label-for="name"
                  description="Enter a name for the vehicle.">
      <b-form-input id="name"
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="Enter name">
      </b-form-input>
    </b-form-group>

    <b-form-group id="brand-group"
                  label="Brand:"
                  label-for="brand"
                  description="Enter the vehicle brand.">
      <b-form-input id="brand"
                    type="text"
                    v-model="form.brand"
                    required
                    placeholder="Enter brand">
      </b-form-input>
    </b-form-group>
  </b-form>
  

  <b-button :variant="'primary'" @click="submit">
    Save
  </b-button>
</b-container>
</template>

<script lang="js">
  export default  {
    name: 'VehicleNew',
    props: [],
    mounted() {

    },
    data() {
      return {
        form: {
          name: '',
          model: '',
          brand: '',
          buildYear: ''
        }
      }
    },
    methods: {
      createVehicle () {
        return {
          name: this.form.name,
          model: this.form.model,
          brand: this.form.brand,
          buildYear: this.form.buildYear,
        }
      },
      submit () {
        const vehicle = this.createVehicle();
        this.$store.commit('registerVehicle', vehicle)
        this.$router.push({ name: 'vehicles' })
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
form {
  text-align: left;
}
</style>
