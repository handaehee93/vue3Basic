<template>
  <div>
    <TheNav></TheNav>
    <TheBody></TheBody>
    <!-- 전역적으로 등록한 컴포넌트는 별다른 import 없이 사용이 가능하다. -->
    <GlobalComponent></GlobalComponent>
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue"
import TheBody from "./components/TheBody.vue"


export default {
  components: {
    // TheNav : TheNav 인데 key와 value가 같으면 단축해서 사용할 수 있다.
    TheNav,
    TheBody,
  },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>