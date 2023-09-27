<template>
  <div>
    <div>
      <DailySalesReportTable :selectedPerPage="perPage" />
    </div>
    <div>
      <h5>Statics</h5>
      <Statics class="tableContent" :fieldSet="fieldSet" :itemArr="itemArr" />
    </div>
  </div>
</template>

<script>
import DailySalesReportTable from './DailySalesReportTable.vue'
import Statics from './Statics.vue'
import APIReports from '../../mixins/APIReports'
import data from '../../data/Config_Sales_Statics_Details.json'
export default {
  name: 'Daily Sales Report',
  mixins: [APIReports],
  props: {
    selectedPerPage: {
      type: Number,
      default: null
    }
  },
  components: {
    DailySalesReportTable,
    Statics
  },
  data () {
    return {
      perPage: 2,
      itemArr: [],
      fieldSet: [
        'no of total orders',
        'no of total items selled',
        'total amount (Rs.)'
      ]
    }
  },
  watch: {
    selectedPerPage: {
      handler (val) {
        this.perPage = val
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    this.handleGetStatics()
  },
  methods: {
    handleGetStatics: async function () {
      try {
        this.itemArr = await this.getSalesStatics()
      } catch (e) {
        this.itemArr = data.salesStatics
      }
    }
  }
}
</script>

<style scoped>
.textCenter {
  text-align: center;
}
.tableContent {
    width: 40%;
}
@media only screen and (max-width: 767px) {
  .tableContent {
    width: 100%;
  }
}
</style>
