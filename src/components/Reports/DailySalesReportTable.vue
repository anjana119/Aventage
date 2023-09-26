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
export default {
  name: 'Daily Sales Report Table',
  data () {
    return {
      items: [
        {
          order: 'Order 1',
          date: '2023/09/23',
          rice: 2,
          rotty: 0,
          noodles: 1,
          wadai: 0,
          dhalcurry: 2,
          fishcurry: 1,
          watalappam: 0,
          jelly: 0,
          pudding: 2,
          qty: 8,
          price: 550
        }
      ],
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
  }
}
</script>

<style scoped>
.textCenter {
  text-align: center;
}
</style>
