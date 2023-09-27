<template>
    <div class="spaceBetween">
        <div>
            <b-dropdown id="dropdown-1" :text="text" class="m-md-2" variant="warning">
                <b-dropdown-item
                    v-for="option in dropDownArray"
                    :key="option.id"
                    :active="text === option.text ? true : false"
                    @click="handleGetChangeEvent(option.text, option.condition)"
                >
                    {{ option.text }}
                </b-dropdown-item>
            </b-dropdown>
        </div>
        <div>
            <span>Show </span>
            <b-dropdown id="dropdown-2" :text="text1" class="m-md-2" variant="warning">
                <b-dropdown-item
                    v-for="option in dropDownArrayPagination"
                    :key="option.id"
                    :active="text1 === option.text ? true : false"
                    @click="handleGetChangeEvent(option.text, option.condition)"
                >
                    {{ option.text }}
                </b-dropdown-item>
            </b-dropdown>
            <span> Entries</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DropDownComponents',
  props: {
    selectedText: {
      type: String,
      default: null
    },
    selectedPerPage: {
      type: Number,
      default: 2
    },
    itemsForSelectDuration: {
      type: Array,
      default: null
    },
    itemsForPagination: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      text: '',
      text1: '',
      dropDownArray: [],
      dropDownArrayPagination: []
    }
  },
  watch: {
    selectedText: {
      handler (txt) {
        this.text = txt
      },
      immediate: true,
      deep: true
    },
    selectedPerPage: {
      handler (num) {
        this.text1 = num
      },
      immediate: true,
      deep: true
    },
    itemsForSelectDuration: {
      handler (arr) {
        this.dropDownArray = arr
      },
      immediate: true,
      deep: true
    },
    itemsForPagination: {
      handler (arr) {
        this.dropDownArrayPagination = arr
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleGetChangeEvent (txt, condition) {
      this.$emit('handleEmitChangeEvent', txt, condition)
    }
  }
}
</script>

<style scoped>
.spaceBetween {
  display: flex;
  justify-content: space-between;
}
</style>
