<template>
  <div>
    <!-- {{  }}를 통해 반응형 데이터를 바인딩 할 수 있다. -->
    <h3> {{ message }} </h3>
    
    <!-- {{  }}에서는 데이터를 표시해줄 뿐만 아니라 자바스크립트 표현식도 사용할 수 있다. -->
    <h3>{{ message.split('').reverse() }}</h3>
    <h3>{{ message.length > 10 ? "10보다 크다" : "10보다 작다" }}</h3>
    
    <!-- v-once를 사용하면 처음 값만 가져오고 변경이 되지 않게 할 수 있다. -->
    <h3 v-once>{{ message }}</h3>
    
    <!-- 버튼 클릭시 v-once가 붙어 있는 message는 변경이 되지 않는다. -->
    <button v-on:click="message = message + '!'">메세지 변경</button>

------------------------------------------------------------------------------------------------------------------------------
    <!-- 속성에 바인딩을 할 때는 v-bind를 사용한다.  -->
    <!-- title은 마우스를 hover했을 때 나타날 텍스트를 지정하는 속성인데 해당 속성에 binding을 걸어 반응형 데이터를 넣을 수 있다. -->
    <div title="안녕하세요">마우스를 올려서 속성 확인</div>
    <div v-bind:title="bindingTitle">마우스를 올려서 속성 확인</div>
    
    <!-- disabled 속성은 input창의 입력을 막는 속성인데 이렇게 속성 존재 자체가 참,거짓을 의미하는 boolean 속성도 바인딩 할 수 있다. -->
    <input type="text" disabled>
    <input type="text" v-bind:disabled="isInputDisabled"/>
    
    <!-- v-bind는 :로 단축하여 사용할 수 있다. -->
    <input type="text" :disabled="isInputDisabled"/>
    
    <!-- 여러 속성을 한번에 바인딩 할 수 도 있다. -->
    <input v-bind:="attrs">
  </div>  
</template>

<script>
import {ref} from 'vue'

  export default {
    setup(){
      const message =  ref("안녕하세요")
      const bindingTitle = ref("title속성에 바인딩하기")
      const isInputDisabled = ref(false)
      const attrs = ref({
        type:'password',
        value: 123,
        disabled: true
      })

      return {
        message,
        bindingTitle,
        isInputDisabled,
        attrs
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>