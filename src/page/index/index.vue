<template>
  <div class="page">
       <Menu>
          <submenu v-for="(item, index) in 3" :key="index">
            <template slot="title">
                我是标题 >
            </template>
            <menu-item v-for="(item, index) in 4" :key="index">
                我是内容
            </menu-item>
          </submenu>
       </Menu>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component'
import Menu from './menu.vue'
import MenuItem from './menuItem.vue'
import Submenu from './submenu.vue'

@Component({
  components:{
    Menu,
    MenuItem,
    Submenu,
  }
})
export default class Index extends Vue {

}
</script>

<style scoped lang="scss">
  .page{
    padding: 50px;
  }
</style>
