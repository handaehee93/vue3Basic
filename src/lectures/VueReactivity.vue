<template>
  <div>
    <!-- reactive로 선언한 반응형 객체를 아래와 같이 사용할 수 있고, 객체의 dept가 깊어도 출력할 수 있다. -->
    <button v-on:click="increment">카운트 증가 버튼{{ state.count }}</button>
    <div>{{ state.student.name }}</div>

    <!-- toRefs를 활용하여 반응형 객체를 구조분해 할당하여 가져온 값을 출력 -->
    <!-- 구조분해 할당으로 값을 꺼내온것이기 때문에 state.title과 같은 방식으로 하지 않아도 된다. -->
    <div>{{ title }}</div>
    <div>{{ price }}</div>
    <div>{{ description }}</div>
    ------------------------------------------------------------------------------------------------------------------------------
    <!-- 원시 타입은 ref로 선언할 수 있고 아래와 같이 사용한다. -->
    <div>{{ message }}</div>
    <button v-on:click="addMessage">메시지 추가 버튼</button>
  </div>
</template>

<script>
import {reactive, ref, toRefs, toRef} from 'vue'

  export default {
    setup () {
      // reactive는 반응형 객체를 선언할 때 사용한다.
      const state = reactive ({
        count : 0,
        student : {
          name: "hdh"
        },
        title : "reactive로 생성한 반응형 객체",
        price : 30000,
        description : "테스트중"
      })
      // toRefs를 이용하면 reactive로 생성한 반응형 객체의 각 요소를 구조 분해 할당으로 가져올 수 있다.
      // toRefs를 사용하지 않고 const {title, price} = state로 구조 분해 할당 할 수 있지만 이렇게 하면 반응성이 사라지고
      // 그냥 현재 값만 꺼내온 것이 되기 때문에 toRefs를 통해 구조 분해 할당 해줘야 한다.
      const {title, price} = toRefs(state)

      // toRef를 사용하면 가져오고 싶은 값 하나를 가져올 수 있다. toRef에는 객체와 가져오고 싶은 key 값을 전달한다.
      const description = toRef(state, 'description')

      
      const increment = () => {
        state.count++
      }

      
      
      
      // 원시 타입은 reactive로 사용할 수 없다. ref를 사용해야 한다.
      // ref는 value라는 속성 하나만 갖는 객체를 반환하기 때문에 '자바 스크립트'에서 사용할 때는 .value로 값에 접근한다.
      // template에  표현할 때는 .value를 붙이지 않아도 된다.
      let message = ref("원시 타입")
      const addMessage = () => {
        message.value = message.value + '!'
      }
      
      return {
      state,
      increment,
      message,
      addMessage,
      title,
      price,
      description,
    }
  }
    

  }
</script>

<style lang="scss" scoped>

</style>