<template>
    <div class ="liked">
        <div v-if="liked1">좋아요 눌렀음</div>
        <button v-else v-on:click="onClickButton1">Like</button>

        <div v-if="liked2">좋아요 눌렀음</div>
        <button v-else v-on:click="onClickButton2">Like</button>
        
        <div v-if="liked3">좋아요 눌렀음</div>
        <button v-else v-on:click="onClickButton3">Like</button>
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