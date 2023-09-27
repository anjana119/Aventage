<template>
  <div>
    <b-row>
      <b-col>
        <b-table
          hover
          :items="items"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          responsive="lg"
        >
          <template #thead-top="data">
            <b-tr>
              <b-th colspan="2"><span class="sr-only">Name and ID</span></b-th>
              <b-th class="textCenter" variant="success" colspan="3">Main Dish Qty</b-th>
              <b-th class="textCenter" variant="primary" colspan="3">Side Dish Qty</b-th>
              <b-th class="textCenter" variant="secondary" colspan="3">Dessert Qty</b-th>
              <b-th colspan="2"><span class="sr-only">Qty and Total Proce</span></b-th>
            </b-tr>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <div class="paginationComp">
      <Pagination :items="items" :selectedPerPage="perPage" @handleEmitCurrentPage="handleEmitCurrentPage" />
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
import APIReports from '../../mixins/APIReports'
import data from '../../data/Config_Sales_Report_Details.json'
import dataFields from '../../data/Config.json'
import moment from 'moment'
export default {
  name: 'Daily Sales Report Table',
  mixins: [APIReports],
  props: {
    selectedPerPage: {
      type: Number,
      default: null
    }
  },
  components: {
    Pagination
  },
  data () {
    return {
      perPage: 2,
      currentPage: 1,
      items: [],
      fields: dataFields.fields
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
    this.handleGetSalesReport()
  },
  methods: {
    handleGetSalesReport: async function () {
      try {
        this.items = await this.getSalesReport()
      } catch (e) {
        this.items = data.salesReport
        for (let x = 0; x < this.items.length; x++) {
          this.items[x].date = new Date()
          this.items[x].date = moment().format('L')
        }
      }
    },
    handleEmitCurrentPage (current) {
      this.currentPage = current
    }
  }
}
</script>

<style scoped>
.textCenter {
  text-align: center;
}
.paginationComp {
  display: flex;
  justify-content: end;
}
</style>
