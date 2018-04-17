<template>

    <button class="btn btn-primary" >
        <slot></slot>
    </button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop() type:[string,number]
  @Prop() disabled:boolean

  created(){

  }

}
</script>

<style scoped lang="scss">

  .btn-primary{
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
  .btn{
    outline: 0;
  }
  .btn{
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    user-select:none;
    padding: 6px 15px;
    font-size: 12px;
    border-radius: 4px;
    transition: color 0.2s linear, background-color 0.2s linear, border 0.2s linear, box-shadow 0.2s linear;
  }
  .btn:before {
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    background: #fff;
    opacity: 0.35;
    content: '';
    border-radius: inherit;
    z-index: 1;
    transition: opacity 0.2s;
    pointer-events: none;
    display: none;
  }
  .btn-primary:hover, .btn-primary:active, .btn-primary.active {
    color: #fff;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #57a3f3;
    border-color: #57a3f3;
}
.btn-primary:active, .btn-primary.active {
    color: #f2f2f2;
    background-color: #2b85e4;
    border-color: #2b85e4;
}
.btn-primary:focus {
    box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
}
</style>
