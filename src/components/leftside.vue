<template>
  <div class="leftside">
    <b-sidebar id="sidebar-1" bg-variant="#3467A9" shadow no-header-close visible>
      <div class="px-3 py-2">
        <nav class="mb-3">
          <b-nav vertical>
            <strong>:Personal Information</strong>
            <b-list-group>
              <b-list-group-item href="#"
                                 v-for="tab in tabs.first"
                                 v-bind:key="tab"
                                 v-bind:class="['tab-button', { active: currentTab === tab }]"
                                 v-on:click="currentTab = tab"
                                 variant="secondary">Personal Information</b-list-group-item>
            </b-list-group>
            <hr />
            <strong>:Academic Information</strong>
            <b-list-group>
              <b-list-group-item href="#" v-for="tab in tabs.second"
                                 v-bind:key="tab"
                                 v-bind:class="['tab-button', { active: currentTab === tab }]"
                                 v-on:click="currentTab = tab"
                                 variant="secondary">{{tab}}</b-list-group-item>

            </b-list-group>
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
    
    <component v-bind:is="currentTabComponent" :username="username"></component>

  </div>
</template>

<script>
  import personal_information from '../components/personal_information.vue';
  import announcements from '../components/announcements.vue';
  import grade_sheet from '../components/grade_sheet.vue';
  import timetable from '../components/timetable.vue';

  export default {
    name: 'leftside',
    props: ['username'],
    components: {
      personal_information,
      announcements,
      grade_sheet,
      timetable,
    },
    
    data() {
      return {
        currentTab: "Personal Information",
        
        tabs: {
          first: ["Personal Information"],
          second: ["Announcements", "Grade Sheet", "Timetable"]
          }
      };
    },
    computed: {
      currentTabComponent: function () {
        return "" + this.currentTab.replace(" ", "_").replace(" ", "_").toLowerCase();
      }
    },
    
  }
</script>
<style>  
    hr {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

  #sidebar-1 {
    position: absolute;
    top: 88px;
    width: 250px;
    background: #3467A9;
  }

  b, strong {
    font-weight: bolder;
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
    text-align: right;
  }
    
</style>
