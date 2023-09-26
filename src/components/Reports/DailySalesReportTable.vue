<template>
    <div>
        <div>
            <b-table hover :items="items" :fields="fields" responsive="sm">
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
        </div>
    </div>
</template>

<script>
import APIReports from '../../mixins/APIReports'
import data from '../../data/Config_Sales_Report_Details.json'
import moment from 'moment'
export default {
  name: 'Daily Sales Report Table',
  mixins: [APIReports],
  data () {
    return {
      items: [],
      fields: [
        'order',
        { key: 'date', label: 'Date' },
        { key: 'rice', label: 'Rice' },
        { key: 'rotty', label: 'Rotty' },
        { key: 'noodles', label: 'Noodles' },
        { key: 'wadai', label: 'Wadai' },
        { key: 'dhalcurry', label: 'Dhal Curry' },
        { key: 'fishcurry', label: 'Fish Curry' },
        { key: 'watalappam', label: 'Watalappam' },
        { key: 'jelly', label: 'Jelly' },
        { key: 'pudding', label: 'Pudding' },
        { key: 'qty', label: 'Total Items' },
        { key: 'price', label: 'Total Price (Rs.)' }
      ]
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
          this.items[x].date = moment().format('MMMM Do YYYY')
        }
      }
    }
  }
}
</script>

<style scoped>
.textCenter {
  text-align: center;
}
</style>
