<template>
  <div class="v-main-wrapper">
    <keep-alive> <router-view></router-view></keep-alive>
   
   
  </div>
</template>

<script>
 
  import { mapGetters } from 'vuex';

  export default {
  name: "v-main-wrapper",
 
  props:{},
  data() {
    return{
        title: "hello!",
    };
  },
  computed:{
    ...mapGetters (["CART"]),
  },
  methods:{},
  watch:{},
  mounted(){
    console.log('Hello Im here!');
  },
  };
</script>

<style>
.v-main-wrapper{
    max-width: 900px;
    margin: 0 auto;
}
</style>