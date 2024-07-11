<template>
    <div class="v-cart-item">
        <img class="v-catalog-item__image"
        :src="require('../assets/images/'+ cart_item_data.image)" alt="Product picture">
        <div>
            <p>{{ cart_item_data.name }}</p>
            <p>{{ cart_item_data.price }}</p>
            <p>{{ cart_item_data.article }}</p>
            <p>{{ cart_item_data.about }}</p>
        </div>
        <div class="v-cart-item_quantity">
                <p>Количество</p>
                <span>
                    {{ cart_item_data.quantity }}
                </span>
        </div>
        <div>
            <button class="btn" @click="deleteFromCart(index)">Удалить</button>
        </div>
         
    </div>
    
    
  </template>
  
  <script>
  
  export default {
  name: "v-cart-item",
 
  props:{
    cart_item_data:{
        type: Object,
        default(){
            return{};
        },
    },
  },
  data() {
      return{
          title: "hello!",
      };
  },
  computed:{},
  methods:{
    deleteFromCart(index) {
        this.$emit('deleteFromCart', index);
    },
  },
  watch:{},
  mounted(){
      console.log('Hello Im here!');
  },
  };
  </script>
  
  <style>
  .v-cart-item{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      flex-basis: 25%;
      box-shadow: 0 0 8px 0 grey;
      padding: 20px;
      margin: 20px;
      
  }
  .v-cart-item__image{
    min-width: 10%;
  }
  </style>