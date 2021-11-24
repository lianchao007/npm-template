<!--
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2021-11-24 13:34:50
 * @LastEditors: lc
 * @LastEditTime: 2021-11-24 14:18:46
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <digital></digital>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
