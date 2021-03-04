<template>
  <div class="about">
    <h1 class="md-display-4">About cats</h1>

    <md-field>
      <label>City</label>
      <md-input v-model="city"></md-input>
    </md-field>

    <md-table>
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Email</md-table-head>
        <md-table-head>Gender</md-table-head>
        <md-table-head>Job Title</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>1</md-table-cell>
        <md-table-cell>Shawna Dubbin</md-table-cell>
        <md-table-cell>sdubbin0@geocities.com</md-table-cell>
        <md-table-cell>Male</md-table-cell>
        <md-table-cell>Assistant Media Planner</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>2</md-table-cell>
        <md-table-cell>Odette Demageard</md-table-cell>
        <md-table-cell>odemageard1@spotify.com</md-table-cell>
        <md-table-cell>Female</md-table-cell>
        <md-table-cell>Account Coordinator</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>3</md-table-cell>
        <md-table-cell>Vera Taleworth</md-table-cell>
        <md-table-cell>vtaleworth2@google.ca</md-table-cell>
        <md-table-cell>Male</md-table-cell>
        <md-table-cell>Community Outreach Specialist</md-table-cell>
      </md-table-row>
    </md-table>

    {{ JSON.stringify(weather) }}

    <md-button v-on:click="onButtonClick" class="md-primary">OK</md-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      city: '',
      weather: undefined,
    };
  },
  created() {
    console.log('About');
  },
  methods: {
    async onButtonClick() {
      const woeid = await fetch(`https://www.metaweather.com/api/location/search/?query=${this.city}`)
          .then(res => res.json());
      this.weather = await fetch(`https://www.metaweather.com/api/location/${woeid}`).then(res => res.json());
    },
  },
}

</script>
