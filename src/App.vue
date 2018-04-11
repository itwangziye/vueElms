<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

export default class App extends Vue {



}
</script>

<style>
body {
  font-size: 16Px !important;
}

html,body,#app {
  width: 100%;
  height: 100%;
}
</style>
