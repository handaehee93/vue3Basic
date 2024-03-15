<template>
  <!-- 반복하고 싶은 요소에 v-for를 통해 요소를 반복 출력한다. 이때 고유한 값인 key값을 반드시 넣어줘야 한다. -->
  <!-- 배열의 각 요소와 index를 가져올 수 있다. -->
  <div v-for="(item, index) in items" :key="item.id">
    아이템 이름 : {{ item.message }}
    인덱스 : {{ index }}
  </div>
  <hr>
  <!-- v-for와 v-if를 동시에 사용할 순 없다. 반복문 내에서 조건문을 사용하고 싶다면 아래와 같이 template태그를 사용해야 한다. -->
  <template v-for="item in items" :key="item.id">
    <div v-if="item.id % 2 === 0">{{ item.message }}</div>
  </template>

  ------------------------------------------------------------------------------------------------------------------------------
  <!-- 배열 뿐 아니라 객체도 반복해서 출력할 수 있다. 객체의 경우 value(값), key(키 값), index(순서) 순으로 값을 받아온다. -->
  <div v-for="(value, key, index) in obj" :key="key">
    키 : {{ key }} / 벨류 : {{ value }} / 인덱스 : {{ index }}
  </div>

</template>

<script>
import {reactive} from 'vue'

export default {
  setup () {
    const items = reactive([
    {id: 1, message: 'javaScript'},
    {id: 2, message: 'java'},
    {id: 3, message: 'python'},
  ])

    const obj = reactive({
      title:"제목",
      author: "hdh",
      date : "2024-03-15"
    })

  return {items,obj}
  }
}

</script>

<style lang="scss" scoped>

</style>