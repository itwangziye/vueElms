<template>
  <li class="submenu">
          <div class="submenu-titel" @click.stop="clickTitle">
            <slot name="title"></slot>
          </div>
          <transition name="bounce">
            <ul v-if="itemShow">
              <slot></slot>
            </ul>
          </transition>
      </li>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from 'vue-property-decorator'
import MenuItem from './menuItem.vue'
@Component({
  components:{
    MenuItem
  }
})
export default class Submenu extends Vue {
  itemShow:boolean = true;
  clickTitle(){
    this.itemShow = !this.itemShow;
  }
}
</script>

<style scoped lang="scss">
  .submenu{
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all 0.2s ease-in-out;
      .submenu-titel{
        color: #fff;
        padding: 14px 24px;
        background: #495969;
      }
    }
    .item-active{
        color: #fff;
        background: #2d8cf0 !important;
    }
    .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
     opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
