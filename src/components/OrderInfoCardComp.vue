<template>
  <div>
    <b-card header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">
          <i class="fa fa-info" aria-hidden="true" />
          Order Information
        </h6>
      </template>
      <div v-if="showComp === 0">
        <div class="centerContent">
          <i class="fa fa-shopping-cart fa-5x" aria-hidden="true" />
        </div>
        <div class="centerContent">
          <b-card-text>Still haven't any orders to process..</b-card-text>
        </div>
      </div>
      <div v-if="showComp === 1">
        <div>
          <TableComp
            @handleTotalValues="handleTotalValues"
            @handleEmitConditionForProcessNext="handleEmitConditionForProcessNext"
            :itemDetails="itemDetails"
          />
        </div>
        <b-row>
          <b-col cols="9" sm="6" md="9" lg="9">
            No of Foods:
          </b-col>
          <b-col cols="3" sm="6" md="3" lg="3">
            {{ arrLength != 0 ? arrLength : '' }}
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="9" sm="6" md="9" lg="9">
            No of Items:
          </b-col>
          <b-col cols="3" sm="6" md="3" lg="3">
            {{ totQty != 0 ? totQty : '' }}
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="9" sm="6" md="9" lg="9">
            Total Price (Rs):
          </b-col>
          <b-col cols="3" sm="6" md="3" lg="3">
            {{ totPrice != 0 ? (totPrice + ' /=') : '' }}
          </b-col>
        </b-row>
      </div>
      <template #footer>
        <b-button
          :disabled="!condition"
          :style="!condition ? 'cursor: not-allowed;' : 'cursor: pointer;'"
          class="blockLevelBtn"
          variant="outline-warning"
          @click="handleSubmitOrder()"
        >
          Confirm Order Details
        </b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
import TableComp from './TableComp.vue'
export default {
  name: 'Order Info Card Component',
  components: {
    TableComp
  },
  props: {
    selectedDish: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      showComp: 0,
      totPrice: 0,
      totQty: 0,
      condition: false,
      arrLength: 0,
      itemDetails: {}
    }
  },
  watch: {
    selectedDish: {
      handler (val) {
        if (val instanceof Object) {
          this.itemDetails = val
          if (val.id) {
            this.showComp = 1
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleTotalValues (qty, price, length) {
      this.totQty = qty
      this.totPrice = price
      this.arrLength = length
      length === 0 ? this.showComp = 0 : this.showComp = 1
    },
    handleEmitConditionForProcessNext (con) {
      this.condition = con
    },
    handleSubmitOrder: async function () {
      try {
        console.log('done')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
  .centerContent {
    display: flex;
    justify-content: center;
  }
  .card-footer {
    background-color: rgb(254, 254, 254) !important;
  }
  .blockLevelBtn {
    width: 100%;
  }
</style>
