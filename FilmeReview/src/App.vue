<template>
  <div class = "body">
    <menu :rotas="routes"/>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
  
</template>

<script>
import { routes }  from './routes';
import Rotas from './shared/rotas/Rotas.vue';

export default {

  components: {
    'menu' : Rotas
  },

    data() {

    return {
      routes
    }

  }
}
</script>

<style>

</style>
