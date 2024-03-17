<template>
  <div>
    <!-- 이벤트 처리는 "v-on" 디렉티브로 사용할 수 있다. 해당 디렉티브는 @로 단축해서 사용할 수 있다. -->
    <!-- 클릭 이벤트에 함수명만 전달하면 자동으로 event가 매개 변수로 들어 가는데 아래 처럼 인자를 받는 함수 라면 $를 통해 이벤트롤 보내줘야 한다. -->
    <button @click="eventInfo($event, '메세지')">event</button>

    <!-- 아래는 키보드 이벤트, 해당 이벤트는 키보드에 어떤 키가 눌렸는지가 event로 넘어간다.-->
    <input type="text" @keyup="onKeyUpEventHandler">
    -----------------------------------------------------------------------------------------------------------
    <!-- 이벤트를 조작할 때 이벤트 버블링이나 기본 기능을 막기 위해 event.stopPropagatioin이나 event.preventDefault를 사용하는데 이걸 메서드 내부에서 사용하는 것은 비즈니스로직이 아니므로 비 효율적이다. nuxt 이러한 경우 이벤트 수식어 기능을 제공한다. -->

    <!-- 아래 Html 구조를 보면 div 안에 p가 있고, p안에 span이 있는데 span태그의 클릭 이벤트가 발생 하면 이벤트 버블링에 의해 div와 P에도 이벤트가 전달 되어 버린다. 이걸 막기 위해서는 span태그 클릭 이벤트에 .stop을 붙여주면 된다.  -->
    <!-- .capture는 이벤트 버블링이 발생했을 경우 가장 먼저 해당 이벤트가 실행되게 해준다. -->
    <!-- .self를 붙이면 해당 요소가 클릭되지 않은 경우에는 이벤트 버블링이 발생하지 않게 된다. -->
    <div>
      <div @click="clickDiv">
        div영역
        <p @click.capture="clickP">
          P 영역
          <span @click.stop="clickSpan">
            span영역
          </span>
        </p>
      </div>
    </div>

    <!-- 아래는 preventDefault사용법 -->
    <!-- .prevent를 붙임으러써 a 태그의 기본 기능인 페이지 이동 기능이 막히게 되었다. -->
    <a href="https://naver.com" @click.prevent>네이버로 이동</a>


    <!-- 키 수식어 -->
    <!-- enter키를 누르면 input창에 입력한 값이 배열에 추가되게 한 것. -->
    <!-- .enter 말고도 여러가지 키 이벤트가 있다. -->
    <input type="text" @keyup.enter="addToDos">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'

  export default {
      setup () {
        const todos = reactive([])

        const eventInfo = (event, message) => {
          console.log(event)
          console.log(message)
        }

        const onKeyUpEventHandler = (event) => {
          console.log(event)
        }

        const clickDiv = (e) => {
          console.log('clickDiv',e)
        }

        const clickP = (e) => {
          console.log('clickP', e)
        }

        const clickSpan = (e) => {
          console.log('clickSpan', e)
        }

        const addToDos = (e) => {
          if(e.key === 'Enter') {
            todos.push(e.target.value)
          }
        }

        return {
          eventInfo,
          onKeyUpEventHandler,
          clickDiv,
          clickP,
          clickSpan,
          todos,
          addToDos
        }
      }
  }
</script>

<style lang="scss" scoped>

</style>