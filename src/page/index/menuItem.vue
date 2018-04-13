<template>
  <li :class="classes" @click.stop="handleClick" >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from 'vue-property-decorator'

@Component
export default class MenuItem extends Vue {
  active:boolean = false;
  @Prop() disabled:boolean;
  get classes(){
    return [
      'menu-item',
      {
        'item-active':this.active,
        'item-selected':this.active,
        'item-disabled':this.disabled,
      }
    ]
  }

  handleClick(){
    this.active = true;
  }
}
</script>

<style scoped lang="scss">

 .menu-item{
    // padding-left: 43px;
    padding: 14px 50px;
    position: relative;
    cursor: pointer;
    z-index: 1 ;
    transition: all 0.2s ease-in-out;
    font-size: 14px;
    color: #ccc;
    &:hover{
      color: #fff;
    }
  }
  .item-active{
    background-color: #2d8cf0;
  }
</style>
