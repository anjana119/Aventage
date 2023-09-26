<template>
    <div>
      <div>
        <b-dropdown id="dropdown-1" :text="selectedText" class="m-md-2" variant="warning">
          <b-dropdown-item
            :active="selectedText === 'Daily' ? true : false"
            @click="handleGetChangeEvent('Daily')"
          >
            Daily
          </b-dropdown-item>
          <b-dropdown-item
            :active="selectedText === 'Weekly' ? true : false"
            @click="handleGetChangeEvent('Weekly')"
          >
            Weekly
          </b-dropdown-item>
          <b-dropdown-item
            :active="selectedText === 'Monthly' ? true : false"
            @click="handleGetChangeEvent('Monthly')"
          >
            Monthly
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="mt-4 mb-5">
        <h3>
          Sales Report
        </h3>
        <DailySalesReport />
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
export default {
  name: 'Dashboard',
  components: {
    DailySalesReport,
    OtherStaticsTables
  },
  data () {
    return {
      selectedText: 'Daily'
    }
  },
  methods: {
    handleGetChangeEvent (condition) {
      condition === 'Daily' ? this.selectedText = 'Daily' : condition === 'Weekly' ? this.selectedText = 'Weekly' : this.selectedText = 'Monthly'
    }
  }
}
</script>
