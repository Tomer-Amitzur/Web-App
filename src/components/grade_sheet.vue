<template>
  <div class="grade_sheet">
    <template>
      <div :style="image" class="image">
        <h1>Academic Record:</h1>
           <b-table striped hover :items="items"></b-table>
      </div>
    </template>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'grade_sheet',
    props: ['username'],
    data() {
      return {
        image: { backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY1T0DthNiNZKWFzuxA-Eywy2KuFHAeLEF6g&usqp=CAU)"},
        items: [],
      };
    },
    beforeMount() {
      axios
        .get('http://localhost:3000/grades', {
          params: {
            userName: this.username,
          }
        })
        .then(res => {
          console.log(this.userName);
          this.items = res.data;
        })
    },
  }

</script>

<style scoped>
  .grade_sheet {
    position: absolute;
    width: 79%;
    right: 0px;
    z-index: -1;
    top: 87.6px;
    padding-top: 0.5rem;
    //background: #3467A9;
    
  }

  h1 {
    font-weight: bold;
    text-decoration: underline;
    padding-bottom: 0.5rem;
    font-size: 1.8rem;
    text-align: center;
  }

  .image {
    height:70vh;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
