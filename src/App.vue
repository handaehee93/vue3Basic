<template>
  <div>
    <h1>반응형 메세지</h1>
    {{ reactiveMessage }}
    <button v-on:click="addReactiveMessage">반응형 메시지 변경 하기</button>
    <br>
    <h1>일반 메세지</h1>
    {{ normalMessage }}
    <button v-on:click="addNormalMessage">일반 메시지 변경 하기</button>
  </div>
</template>

<script>
import {ref}  from 'vue';
  export default {
    setup(){
      // ref와 같은 반응형 API를 사용하면 데이터를 반응형으로 만들 수 있다.
      const reactiveMessage = ref("reactive 메시지")
      const addReactiveMessage = () => {
        reactiveMessage.value = reactiveMessage.value + '!'
      }

      // 반응형 데이터가 아니면 버튼을 클릭했을때 실시간으로 데이터가 변경이 되지 않는 것을 볼 수 있다.
      let normalMessage = "noraml 메세지"
      const addNormalMessage = () => {
        normalMessage = normalMessage + '!'
      }
      return {
        reactiveMessage,
        addReactiveMessage,
        normalMessage,
        addNormalMessage
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>