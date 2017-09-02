<template>
  <div id="message">
    {{message}}
    <hr>


    <p v-if="seen">Now you see me</p>
    <hr>


    <ul>
      <li v-for="todo in todos" v-bind:key="todo.text"> {{todo.text}} </li>
    </ul>
    <hr>

    <div class="message-reverse">
      <p>{{message}}</p>
      <button v-on:click="reverseMessage">Reverse</button>
    </div>
    <hr>

    
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
  },

  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
