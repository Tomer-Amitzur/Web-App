<template>
    <div class="upside">
      <div>
        <!-- Just an image -->
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#">
            <img src="https://in.bgu.ac.il/marketing/graphics/BGU.sig3-he-en-white.png" alt="Kitten">
          </b-navbar-brand>
        </b-navbar>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'upside',
        props: ['username']
    }
</script>

<style scoped>
  img {
    width: 300px;
  }
  .upside {
     position:absolute;
    width: 100%;
    background: #3467A9;
    z-index: -1;
    right: 0px;
  }
  #container {
    background: #3467A9;
  }
  .btn-link {
    color: black;
  }

  .btn-link {
   
  }
</style>
