<template>
  <div class="announcements">

    <b-card v-on:click="currentComponent = grade_sheet;" title="dkknnfkdnvkdn">
      <b-card-text>{{ shortenedContent }}</b-card-text>
    </b-card>

    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
  import axios from 'axios';
  import grade_sheet from '../components/grade_sheet.vue';

  export default {
    name: 'announcements',
    props: ['username'],
    components: {
      grade_sheet,
    },
    data() {
      return {
        currentComponent: '',
        title: 'חלוקת מתנות - אגודת הסטודנטים'
      };
    },
    methods: {
       onClick() {
    alert(888);
  }
        
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
  .announcements {
    position: absolute;
    width: 79%;
    right: 0px;
    z-index: -1;
    top: 87.6px;
    padding-top: 2rem;
    padding-left: 2rem;
  }

  .card {
    width: 70%;
    height: 25vh
  }

  @media (width: 900px) {
    .modal-dialog {
      margin: .5rem auto;
      width: 900px
    }
  }

</style>
