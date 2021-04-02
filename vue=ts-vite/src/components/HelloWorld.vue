<template>
  <h1>{{ msg }}</h1>
  <button @click="count--">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import {defineComponent,reactive, toRefs,ref, computed} from 'vue'

export default defineComponent ({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 10
    }
  }
})
</script>
