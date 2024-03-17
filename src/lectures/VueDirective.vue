<template>
  <div>
    <!-- 디렉티브는 'v-' 접두사가 있는 특수 속성이다. -->
    <!-- 디렉티브는 말 그대로 컴포넌트 또는 DOM요소에게 "~하게 동작해라" 라고 지시하는 지시문이다. -->

    <!-- "v-text"는 요소의 텍스트 컨텐츠를 업데이트 하게 하는 지시문이다. -->
    <div v-text="msg"></div>

    <!-- "v-html"은 요소의 컨텐츠를 html로 인식하게 한다.-->
    <div v-html="htmlStr"></div>
    <div v-text="htmlStr"></div>

    <!-- "v-clock"은 추가학습 필요 -->

    <!-- "v-once는" 컴포넌트를 한번만 렌더링 하게 한다. 한번 렌더링 된 후 반응형 데이터가 변경이 되도 변경이 되지 않는다. -->
    <div v-once>{{ msg }}</div>
    <button v-on:click="msg = msg + '!'"> msg 반응형 데이터 변경</button>

    <!-- "v-memo"는 "v-once"의 업그레이드 버전이다. "v-memo"에 배열을 넣고 그 안에 반응형 데이터를 넣어 두면 해당 데이터가 변경이 되었을 때만 요소의 변경이 일어난다. 아래 예시에서 memmoNUmber2는 배열에 없기 때문에 버튼을 클릭해도 숫자가 증가하지 않는다.-->
    <div v-memo="[memoNumber]"> memoNumber : {{ memoNumber }} , memoNumber2 : {{ memoNumber2 }}</div>
    <button @click="memoNumber++">memoNumber 숫자 증가</button>
    <button @click="memoNumber2++">memoNumber2 숫자 증가</button>
  </div>
</template>

<script>
import { ref } from 'vue';

  export default {
    setup () {
      const msg = ref("안녕하세요")
      const htmlStr = ref("<div>html 요소 추가</div>")
      let memoNumber = ref(1)
      let memoNumber2 = ref(1)

      return {
        msg,
        htmlStr,
        memoNumber,
        memoNumber2,
        increaseNum
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>