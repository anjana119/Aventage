<template>
    <div>
        <div>
            <DailySalesReportTable />
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
export default {
  name: 'Daily Sales Report',
  components: {
    DailySalesReportTable,
    Statics
  },
  data () {
    return {
      itemArr: [
        { 'no of total orders': 40, 'no of total items selled': 100, 'total amount (Rs.)': 10000, _rowVariant: 'warning' }
      ],
      fieldSet: [
        'no of total orders',
        'no of total items selled',
        'total amount (Rs.)'
      ]
    }
  },
  methods: {}
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
