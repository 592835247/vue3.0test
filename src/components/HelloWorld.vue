<template>
  <div class="hello">
    <button @click="goPage('/test1')">路由1</button>
    <button @click="goPage('/test2')">路由2</button>
    <button @click="goPage('/test3')">路由3</button>
    <button @click="goPage('/test4')">路由4</button>

  </div>
</template>

<script>
import {getCurrentInstance } from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const goPage = (url)=>{
      proxy.$router.push(url);
    }

    return {
      goPage
    };
  },
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
