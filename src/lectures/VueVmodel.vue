<template>
  <div>
      <!-- v-model을 통해 양방향으로 바인딩 했음으로 input태그의 값을 변경시키면 inputValue라는 반응형 데이터도 변경 되고 -->
      <!-- inputValue라는 반응형 데이터를 변경 시켜도 input태그의 값이 변경이 된다. -->
      <!-- v-model은 어떤 태그와 바인딩 하냐, input 의 타입이 뭔지에 따라 바인딩 되는 속성이 다르다. -->

      <!-- type이 text이기 때문에 value 속성과 바인딩 -->
      <input type="text" v-model="inputValue">
      
      <!-- type이 checkbox 이기 때문에 checked 속성과 바인딩 -->
      <input type="checkbox" v-model="checkBoxValue">

      <!-- checkbox가 여러개 있는 경우 배열을 바인딩 할 수 있다. -->
      <!-- 하나하나 체크할 때마다 배열에 요소가 추가되고, 체크를 해제 하면 배열에서 빠진다. -->
      <label for="">
        <input type="checkbox" value="html" v-model="checkBoxValues">
        <input type="checkbox" value="vue3" v-model="checkBoxValues">
        <input type="checkbox" value="nuxt3" v-model="checkBoxValues">
      </label>

      <!-- v-model도 수식어를 사용할 수 있다. -->

      <!-- .lazy를 붙이면 input창에서 focus가 떨어졌을 때 동기화 된다. -->
      <input type="text" v-model.lazy="inputValue" />

      <!-- .number를 붙이면 사용자의 입력을 자동으로 number 타입으로 형변환 한다. -->
      <input type="text" v-model.number="inputValue" />

      <!-- .trim을 붙이면 사용자의 입력에서 앞뒤 공백을 자동으로 제거한다. -->
      <input type="text" v-model.trim="inputValue" />

  </div>
</template>

<script>
import { ref, reactive } from 'vue'

  export default {
    setup() {
      const inputValue = ref('이름을 입력하세요')
      const checkBoxValue = ref(true)
      const checkBoxValues = reactive([])
      
      return {
        inputValue,
        checkBoxValue,
        checkBoxValues
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>