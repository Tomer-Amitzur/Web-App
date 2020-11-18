<template>
  <div id="secure">
    <upside></upside>
    <leftside :username="username"></leftside>   

  </div>

</template>

<script>
    import leftside from '../components/leftside.vue';
    import upside from '../components/upside.vue';
    


    export default {
    name: 'Secure',
    props: ['username'],
      components: {
        upside,
        leftside,
      },
      data() {
        return {

        };
    },
    }
</script>

<style scoped>
  #secure {
    background: #000000;
  }
</style>
