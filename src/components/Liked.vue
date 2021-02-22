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
  const app = new Vue({
  el : '#liked', // root를 Vue가 통제하고 있다.
      data : {
          liked1 : false, //liked 라는 데이터가 false
          liked2 : false, 
          liked3 : false, 
      },
      methods: {
          onClickButton1(){
              this.liked1 = true; //data.liked = true
          },
          onClickButton2(){
              this.liked2 = true; //data.liked = true
          },
          onClickButton3(){
              this.liked3 = true; //data.liked = true
          }
      }
    });
</script>