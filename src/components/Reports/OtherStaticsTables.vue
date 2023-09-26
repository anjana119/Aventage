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
export default {
  name: 'Other Static Tables',
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
      itemArrMain: [
        { 'dish': 'Rice', 'rate (%)': 38.8, _rowVariant: 'warning' }
      ],
      itemArrSide: [
        { 'dish': 'Fish Curry', 'rate (%)': 62.6, _rowVariant: 'warning' }
      ],
      itemArrOther: [
        { 'side dish': 'Fish', 'main dish': 'Rice', _rowVariant: 'warning' }
      ]
    }
  },
  methods: {}
}
</script>
