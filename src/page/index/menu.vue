<template>
  <div class="page">
    <ul class="menu">
      <slot>

      </slot>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Menu extends Vue {
  


}
</script>

<style scoped lang="scss">
  .menu{
    font-size: 14px;
    position: relative;
    color:#495060;
    background: #495060;
    width: 240px;

  }



</style>
