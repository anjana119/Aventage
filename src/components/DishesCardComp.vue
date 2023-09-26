<template>
  <div>
    <b-card
      :title="itemDetails.title"
      :img-src="itemDetails.avatar"
      img-alt="Food Item"
      img-top
      tag="article"
      footer-tag="footer"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        Rs. {{ itemDetails.price }} /=
      </b-card-text>
      <template #footer>
        <b-button
          class="blockLevelBtn"
          variant="outline-warning"
          v-on:click="handleAddItemsToOrder(itemDetails)"
        >
          Add To Order
        </b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Dishes Card Component',
  components: {},
  props: {
    mainItem: {
      type: Object,
      default: null
    },
    sideItem: {
      type: Object,
      default: null
    },
    dessert: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      itemDetails: {
        id: '',
        dishType: '',
        title: '',
        avatar: '',
        price: 0
      }
    }
  },
  watch: {
    mainItem: {
      handler (val) {
        if (val instanceof Object) {
          this.itemDetails = val
        }
      },
      immediate: true,
      deep: true
    },
    sideItem: {
      handler (val) {
        if (val instanceof Object) {
          this.itemDetails = val
        }
      },
      immediate: true,
      deep: true
    },
    dessert: {
      handler (val) {
        if (val instanceof Object) {
          this.itemDetails = val
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleAddItemsToOrder (object) {
      this.$emit('selectedItem', object)
    }
  }
}
</script>

<style scoped>
  .blockLevelBtn {
    width: 100%;
  }
  .card-img, .card-img-top, .card-img-bottom {
    height: 30vh !important;
  }
  .iconGreen {
    color: #50e450;
  }
  .iconRed {
    color: #f23434;
  }
</style>
