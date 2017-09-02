<template>
  <div id="message">
    {{message}}
    <p v-if="seen">Now you see me</p>
  </div>
</template>


<script>
export default {
  name: 'Introduction',

  data () {
    return {
      message: 'Hello, world!',
      seen: true
    }
  }
}
</script>
