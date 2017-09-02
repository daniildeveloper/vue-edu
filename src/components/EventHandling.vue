<template>
  <div>
    <div id="example-1">
      <button v-on:click="counter += 1" >Add 1</button>
      <p>The button has been clicked {{counter}} times.</p>
    </div>
    <div id="example-2">
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{checked}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventHandling',
  data () {
    return {
      counter: 0,
      checked: false
    }
  }
}
</script>

