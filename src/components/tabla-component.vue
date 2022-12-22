<template lang="html">

  <section class="tabla-component">
    <h1>Tabla con Datos desde MockApi</h1>
    <div v-if="$store.state.usuarios.length" class="table-responsive"> 
      <hr>
      <div class="table-responsive">
        <table class="table table-dark">
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
            </tr>
            <tr v-for="(usuario, index) in $store.state.usuarios" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.edad }}</td>
                <td>{{ usuario.email}}</td>
            </tr>
        </table>
      </div>
    </div>  
    <h3 v-else class="alert alert-info">No hay Usuarios en MockApi</h3>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'tabla-component',
    props: [],
    mounted () {
      this.$store.dispatch('getUsuarios')
    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .tabla-component {

  }
</style>
