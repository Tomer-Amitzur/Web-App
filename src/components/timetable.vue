<template>
  <div class="timetable">
    <table id="secondTable">
      <thead>
        <tr>
          <th v-for="day in days">{{day}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hour in hours">
          <td v-bind:style="{'background-color': statusColor(func(day,hour))}" v-for="day in days" >
            {{name}}
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'timetable',
    props: ['username'],
    data() {
      return {
        colors: ["yellow", "blue", "green", "red", "grey"],
        name: "",
        hours: ["8:00-10:00", "10:00-12:00", "12:00-14:00", "14:00-16:00","16:00-18:00"],
        days: ["", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        rows: [],
      }
    },
    computed: {
      "columns": function columns() {
        if (this.rows.length == 0) {
          return [];
        }

        return Object.keys(this.rows[0])
      }
    },
      methods: {
        func(day, hour) {
          if (day == "") {
            this.name = hour;
            return -1;
          }
          var i;
          var j;
          
          for (i = 0; i < this.rows.length; ++i) {
            for (j = 0; j < this.rows[i].time.length; ++j) {
              if (this.rows[i].time[j].day == day && this.rows[i].time[j].hours == hour) {
                this.name = this.rows[i].name;
                return i;
              }
            }
          }
          this.name = "";
          return -1;
        },
        statusColor(res) {
        if(res != -1)
          return this.colors[res%this.colors.length];
        }
      },
      beforeMount() {
        axios
          .get('http://localhost:3000/timetable', {
            params: {
              userName: this.username,
            }
          })
          .then(res => {
            this.rows = res.data;
          })
    },
    }
  
</script>

<style scoped>
  .timetable {
    position: absolute;
    width: 79%;
    right: 0px;
    z-index: -1;
    top: 87.6px;
    padding-top: 0rem;
  }

  table {
    font-family: 'Open Sans', sans-serif;
    width: 98%;
    height: 81vh;
    border-collapse: collapse;
    border: 3px solid #44475C;
    margin: 10px 10px 0 10px;
  }

    table th {
      text-transform: uppercase;
      text-align: center;
      background: #44475C;
      color: #FFF;
      padding: 8px;
      min-width: 30px;
    }

    table td {
      text-align: left;
      padding: 8px;
      border-right: 2px solid #7D82A8;
    }

      table td:last-child {
        border-right: none;
      }

    table tbody tr:nth-child(2n) td {
      background: #D4D8F9;
    }

</style>
