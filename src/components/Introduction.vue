<template>
  <div id="message">
    <span class="message" v-once>
      {{message}}
    </span>
    <span class="cap">{{message | capitalize}}</span>
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

    <div class="message-with-input">
      <p>{{message}}</p>
      <input v-model="message" >
    </div>
  </div>
</template>


<script>
export default {
  name: 'Introduction',
  beforeCreate: function () {
    console.log('Introduction beore creation')
  },
  data () {
    return {
      message: 'sHello, world!',
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
  },

  filters: {
    capitalize: function (value) {
      if (!value) {
        return ' '
      }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
