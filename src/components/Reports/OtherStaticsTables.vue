<template>
    <div>
        <b-row>
            <b-col sm="12" md="6" lg="6">
                <h5>Famous Main Dish</h5>
                <Statics :fieldSet="fieldSet" :itemArr="itemArrMain" />
            </b-col>
            <b-col sm="12" md="6" lg="6">
                <h5>Famous Side Dish</h5>
                <Statics :fieldSet="fieldSet" :itemArr="itemArrSide" />
            </b-col>
            <b-col sm="12" md="6" lg="6">
                <h5>Side Dish Mostly Capable With Main Dish</h5>
                <Statics :fieldSet="fieldSetOther" :itemArr="itemArrOther" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Statics from './Statics.vue'
import APIReports from '../../mixins/APIReports'
import data from '../../data/Config_Sales_Statics_Details.json'
export default {
  name: 'Other Static Tables',
  mixins: [APIReports],
  components: {
    Statics
  },
  data () {
    return {
      fieldSet: [
        'dish',
        'rate (%)'
      ],
      fieldSetOther: [
        'side dish',
        'main dish'
      ],
      itemArrMain: [],
      itemArrSide: [],
      itemArrOther: []
    }
  },
  created () {
    this.handleGetFamousMainDish()
    this.handleGetFamousSideDish()
    this.handleGetSuitableDish()
  },
  methods: {
    handleGetFamousMainDish: async function () {
      try {
        this.itemArrMain = await this.getDailyFamousMainDish()
      } catch (e) {
        this.itemArrMain = data.famousMainDishStatic
      }
    },
    handleGetFamousSideDish: async function () {
      try {
        this.itemArrSide = await this.getDailyFamousSideDish()
      } catch (e) {
        this.itemArrSide = data.famousSideDishStatic
      }
    },
    handleGetSuitableDish: async function () {
      try {
        this.itemArrOther = await this.getDailySuitableDish()
      } catch (e) {
        this.itemArrOther = data.suitableDishes
      }
    }
  }
}
</script>
