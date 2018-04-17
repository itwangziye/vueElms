<template>
  <div class="page">
    <Button  :type="'button'" :disabled="true">
       我是一个button
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component'
import Button from './button.vue'
@Component({
  components:{
    Button,
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
