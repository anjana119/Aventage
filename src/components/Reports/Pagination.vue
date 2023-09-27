<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage">
    </b-pagination>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    },
    selectedPerPage: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      perPage: 2,
      currentPage: 1,
      array: []
    }
  },
  watch: {
    items: {
      handler (val) {
        this.array = val
      },
      immediate: true,
      deep: true
    },
    selectedPerPage: {
      handler (val) {
        this.perPage = val
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    rows () {
      this.$emit('handleEmitCurrentPage', this.currentPage)
      return this.array.length
    }
  }
}
</script>
