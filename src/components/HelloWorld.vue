<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <span class="testClass">wzy哈哈哈</span>
    <div class="testDiv">
      div
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.testClass{
  font-size: 100px;
}
.testDiv{
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 10px auto;
}
</style>
