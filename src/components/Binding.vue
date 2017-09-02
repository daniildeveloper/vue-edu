<template>
  <div id="binding">
    <div v-bind:class="{active: isActive}">isActive</div>
    <div id="inlineStylesBinding" v-bind:style="{color: activeColor, fontSize: fontSize + 'px' }">
        Inline Style
    </div>
  </div>
</template>

<script>
export default {
  name: 'Binding',
  data () {
    return {
      isActive: true,
      activeColor: 'red',
      fontSize: 30
    }
  }
}
</script>

<style scoped >
.active {
  color: green;
}
</style>


