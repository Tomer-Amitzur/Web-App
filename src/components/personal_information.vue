<template>
    <div class="personal_information">
      <b-card border-variant="secondary"
              header="Personal Information:"
              header-border-variant="secondary"
              align="center">


       

        <b-card-img :src="info.image" alt="Image" class="rounded-0"></b-card-img>


        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center"><h1>Full Name:</h1><h2>{{info.name}}</h2></b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center"><h1>ID:</h1><h2>{{info.id}}</h2></b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center"><h1>Email Address:</h1><h2>{{info.email}}</h2></b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center"><h1>Residential Address:</h1><h2>{{info.address}}</h2></b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
    name: 'personal_information',
    props: ['username'],
        data() {
            return {
              info: {},
            };
    },
    
    beforeMount() {
             axios
                .get('http://localhost:3000/info', {
                  params: {

                    userName: this.username,
                    }
                })
               .then(res => {
                 console.log(this.userName);
                    this.info = res.data;
                })
    },

        computed: {
            
        }
    }
</script>

<style scoped>
  .personal_information {
    position: absolute;
    width: 78%;
    right: 0px;
    z-index: -1;
    top: 87.6px;
   padding-right: 12px;
   padding-top:12px;
    
  }

  .list-group {
    padding-top: 160px;
    display: block;
  }

  .rounded-0 {
    max-width: 150px;
    position: relative;
    float: right;
  }
    hr {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .b-card-body{
        float: left
    }

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1rem;
    position: absolute;
    left: 350px;
  }

    

    

</style>
