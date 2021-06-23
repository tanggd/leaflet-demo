<template>
  <Button type="primary">Primary</Button>
  <Button>Default</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="danger">Danger</Button>
  <!-- <a-config-provider :auto-insert-space-in-button="false">
    <Button type="primary">按钮</Button>
  </a-config-provider> -->
  <Button type="primary">按钮</Button>
  <Button type="link">Link</Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

export default defineComponent({
  components: {
    Button
  },
  setup() {

  }
})
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
