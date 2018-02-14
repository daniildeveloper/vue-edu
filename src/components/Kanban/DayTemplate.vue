<template>
</template>

<script>
export default {

  name: 'DayTemplate',

  props: ['selected', 'entry', 'clients'],

  data: function() {
    return {
      edit: false,
      errors: {}
    }
  },

  methods: {
    set_new_date: function(e){
      // console.log('called')
      var element = e.item.querySelectorAll('.entry-date');
      var oldParentIndex = e.from.attributes['data-index'].value;
      var newParentIndex = e.to.attributes['data-index'].value;

      // the drop happens faster then this function thats why it show
      calendar.selected[newParentIndex].entries.splice(e.newIndex, 0, calendar.selected[oldParentIndex].entries.splice(e.oldIndex, 1)[0]);
    },
  }
}
</script>

<style lang="css">

</style>