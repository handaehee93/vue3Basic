<template>
  <div>
    <!-- 아래와 같이 {{  }}안에 자바스크립트 문법을 사용할 수 있지만 너무 길고 가독성이 떨어진다. -->
    <h2>{{ dev.name }}</h2>
    <div>스킬이 3개 이상입니까?</div>
    <div>{{ dev.skills.length >= 5 ? '네' : '아니요' }}</div>

    <!-- computed를 사용하면 훨씬 간결하게 작성할 수 있다. -->
    <div>{{ hasSkills }}</div>
    <div>{{ fullName }}</div>
    <!-- 아래 처럼 메소드를 활용할 수도 있는데 굳이 computed를 사용하는 이유는 computed는 해당 값을 캐시하기 때문이다. -->
    <div>{{ hasKills2() }}</div>

    <!-- getter와 setter가 적용된 computed 예시  -->
    <div>{{ fullNameLength }}</div>

  </div>
</template>

<script>
import {reactive, computed,ref} from 'vue'
  
export default {
    setup () {
      const dev = reactive({
        name: 'hdh',
        skills : ["vue3", "javaScript","java","spring"]
      })

      const hasSkills = computed(() => {
        return dev.skills.length >= 5 ? '네' : '아니요'
      })

      const hasKills2 = () => {
        return dev.skills.length >= 5 ? '네' : '아니요'
      }


    

      const firstName = ref('홍')
      const lastName = ref("길동")
      
      const fullName = computed(() => {
        return firstName.value + lastName.value
      })
    
    // computed는 원래 readonly다. 따라서 computed안에 반응형 변수가 계산 되어 있어도 외부에서 그 값을 변경할 수 없다.  
    fullName.value = "hdh"
    
    // 이때는 computed 내부에 getter와 setter를 만들어 주면 된다. 
    const fullNameLength = computed({
      get(){
         return (firstName.value + ' ' +  lastName.value).length > 3 ? '4자리 이상 이름': '3자리 이름' 
      },
      set(val){
    // split으로 생성된 배열의 각요소를 구조 분해 할당으로 받아오고 바로 반응형 변수에 할당해 준 것.
        [firstName.value, lastName.value] = val.split(' ')
      }
    })

    // 이렇게 value에 값을 전달하면 computed의 setter로 함수로 전달이 된다. setter함수 내부에서 반응형 변수의 값을 변경해 주면 된다.
     fullNameLength.value = '한 대희';



    return {
      dev,
      hasSkills,
      hasKills2,
      fullName,
      fullNameLength
    }
  }


  }
</script>

<style lang="scss" scoped>

</style>