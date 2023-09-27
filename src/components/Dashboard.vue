<template>
  <div>
    <div>
      <DropDownComponents
        :selectedText="selectedText"
        :selectedPerPage="selectedPerPage"
        :itemsForSelectDuration="itemsForSelectDuration"
        :itemsForPagination="itemsForPagination"
        @handleEmitChangeEvent="handleEmitChangeEvent"
      />
    </div>
    <div class="mt-4 mb-5">
      <h3>
        Sales Report
      </h3>
      <DailySalesReport :selectedPerPage="selectedPerPage" />
    </div>
    <hr />
    <div class="mt-5 mb-5">
      <h3>
        Famous Dishes
      </h3>
      <OtherStaticsTables />
    </div>
  </div>
</template>

<script>
import DailySalesReport from './Reports/DailySalesReport.vue'
import OtherStaticsTables from './Reports/OtherStaticsTables.vue'
import DropDownComponents from './DropDownComponents.vue'
import data from '../data/Config.json'
export default {
  name: 'Dashboard',
  components: {
    DailySalesReport,
    OtherStaticsTables,
    DropDownComponents
  },
  data () {
    return {
      selectedText: 'Daily',
      selectedPerPage: 2,
      itemsForSelectDuration: data.duratio_Selection,
      itemsForPagination: data.pagination_selection
    }
  },
  methods: {
    handleEmitChangeEvent (txt, condition) {
      if (condition === 'filterDuration') {
        this.selectedText = txt
        if (txt !== 'Daily') {
          alert(txt)
        }
      } else {
        this.selectedPerPage = txt
      }
    }
  }
}
</script>
