<template>
  <div id="message">
    {{message}}
    <p v-if="seen">Now you see me</p>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.text"> {{todo.text}} </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Introduction',

  data () {
    return {
      message: 'Hello, world!',
      seen: true,
      todos: [
        {
          text: 'Learn js better'
        },
        {
          text: 'Learn Vue.js'
        },
        {
          text: 'Build something awesome'
        }
      ]
    }
  }
}
</script>
