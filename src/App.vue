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
import {ref, onMounted, onBeforeMount}  from 'vue';
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

      // 뷰 인스턴스가 생성되고 종료되는 과정 에서 사용되는 '라이프사이클 훅'이 있다.
      // 예를 들면 아래와 같이 onBeforeMount함수를 사용해 마운트 되기 전에 호출되는 로직을 지정하고
      // onMount를 사용해 마운트 되면 호출되는 로직를 지정할 수 있는 것. 
      onBeforeMount(() => {
        console.log("비포 마운트")
      })

      onMounted(() => {
        console.log("마운트 되었음")
      })


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