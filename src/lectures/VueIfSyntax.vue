<template>
  <div>
    <!-- 현재 visible 이라는 반응형 데이터가 false이기 때문에 v-if 요소는 화면에 나타나지 않고 v-else 요소가 화면에 나타난다. -->
    <h2 v-if="visible">Hello Vue3</h2>
    <h2 v-else>false 입니다.</h2>

    <!-- else if 구문도 사용할 수 있다. 아래에서 반응형 데이터 type의 값을 바꿔 보면 어떤 요소가 화면에 나타나는지 확인할 수 있다.-->
    <h2 v-if="type === 'A'">A타입 입니다.</h2>
    <h2 v-else-if="type === 'B'">B타입 입니다.</h2>
    <h2 v-else-if="type === 'C'">C타입 입니다.</h2>
    <h2 v-else >A, B, C 타입이 아닙니다.</h2>

    <!-- 여러개의 HTML요소를 v-if 디렉티브로 연결하고 싶다면 <template>태그를 사용할 수 있다. -->
    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>       
    </template>
  </div>
</template>

<script>
import { ref } from 'vue';

  export default {
    setup () {
      const visible = ref(true)
      const type = ref("A")

      return {
        visible,type
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>