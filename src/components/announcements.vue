<template>
  <div class="announcements">
    <b-modal ref="my-component">
      <grade_sheet></grade_sheet>
    </b-modal>

    <b-card v-on:click="this.$refs.my-component.show();" :title="title">
      <b-card-text>{{ shortenedContent }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'announcements',
    props: ['username'],
    data() {
      return {
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
