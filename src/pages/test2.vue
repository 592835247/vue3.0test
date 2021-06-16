<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <h1>{{dbcount}}</h1>
    <div @click="countAdd">😁+1</div>
  </div>
</template>

<script>
import {ref,computed,onMounted} from 'vue'

export default {
  name: 'HelloWorld33333',
  props: {
    msg: String
  },
  setup(){
    const count = ref(0)
    const dbcount = computed(()=>{return count.value*2})
    const countAdd = ()=>{
      count.value ++
    }
    onMounted(()=>{
      console.log('重新加载了')

    })
    return{
      count,
      dbcount,
      countAdd
    }
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
