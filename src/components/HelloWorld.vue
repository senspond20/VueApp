<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <ul>
         <li><router-link to = "/example" > example </router-link></li>
         <li><router-link to = "/todos" > Todos </router-link ></li>
         <li><router-link to ="/board"> Board </router-link></li>
         <li><router-link to ="/editor"> Editor </router-link></li>
       <!-- <li><a href ="/example">example</a></li>
        <li><a href ="/todos">Todos</a></li> -->
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'My Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
