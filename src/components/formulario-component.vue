<template lang="html">

  <section class="formulario-component">
    <div class="jumbotron">
      <h2>Crear nuevo Usuario</h2>
      <hr>

      <vue-form :state="formstate" @submit.prevent="enviar()">
        
        <!-- Campo nombre -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" 
            v-model="formData.nombre" 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength" 
            required name="nombre" 
            autocomplete="off" 
            @keydown.space.prevent
            class="form-control" />
    
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
          </field-messages>
        </validate>
        <br>

        <!-- Campo edad -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input type="number" id="edad" v-model="formData.edad" required name="edad" autocomplete="off" class="form-control"
            :min="edadMin"
            :max="edadMax"
            @keydown.space.prevent 
          />
    
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima debe ser {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima debe ser {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        <br>
        
        <!-- Campo email -->
        <validate tag="div">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required name="email" autocomplete="off" class="form-control" />
    
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
            <div slot="email" class="alert alert-danger mt-1">
              Debe ingresar un email válido
            </div>
          </field-messages>
        </validate>

        <br>

        <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Crear</button>
      </vue-form>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'formulario-component',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://63643e927b209ece0f4372e0.mockapi.io/usuariosTP7',
        formstate : {},
        formData : this.getInitialData(),
        nombreMinLength: 3,
        nombreMaxLength: 15,
        edadMin: 18,
        edadMax: 120
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre : null,
          edad: null,
          email: null,
        }
      },
      enviar() {
        let usuario = {...this.formData}

        this.postUsuario(usuario)
        this.formData = this.getInitialData()
        this.formstate._reset()
      },
      async postUsuario(usuarioNew) {
        try {
          this.$store.dispatch('postUsuarios', usuarioNew)
          this.goToComponent('/tablaUsuarios')
        }
        catch(error) {
          console.error('Error en postUsuario', error.message)
        }

      },
      goToComponent(ruta){
        this.$router.push(ruta)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: grey;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }
</style>
