<template>
<div>
  {{count}}
</div>
</template>

<script lang="ts">
import {defineComponent,reactive, toRefs,ref, computed} from 'vue'

export default defineComponent({
  name: 'Home',
  computed:{
      count():number{
          return this.$store.state.count;
      },
  },
  methods:{
      inCount():void{
          this.$store.commit("inCount")
      },
      inMsg(msg:string):void{
          this.$store.commit("inCount",msg)
      }
  }
})
</script>
