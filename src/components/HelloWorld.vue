<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>

  <div class="aa" @click="onChange">change</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmit, useContext, ref } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    required: true,
    default: ''
  },
})

const emit = defineEmit(['chang'])

const ctx = useContext()
console.log(ctx)

console.log(props.msg)

const count = ref(0)

const onChange = () => {
  emit('chang', '123')
}

// export default defineComponent({
//   name: 'HelloWorld',
//   props: {
//     msg: {
//       type: String,
//       required: true
//     }
//   },
//   setup: () => {
//     const count = ref(0)
//     return { count }
//   }
// })
</script>

<style module>
.aa {
  color: red;
}
</style>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
