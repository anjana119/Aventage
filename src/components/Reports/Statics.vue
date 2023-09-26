<template>
  <div>
    <b-table :fields="fields" :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Statics',
  props: {
    fieldSet: {
      type: Array,
      default: null
    },
    itemArr: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      items: [],
      fields: []
    }
  },
  watch: {
    fieldSet: {
      handler (val) {
        if (val.length > 0) {
          this.fields = val
        }
      },
      immediate: true,
      deep: true
    },
    itemArr: {
      handler (val) {
        if (val.length > 0) {
          this.items = val
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
