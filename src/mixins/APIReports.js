import Domain from './domain'
import axios from 'axios'
import configBackendApi from '@/data/Config_Backend_Api'

export default {
  methods: {
    getSalesReport: async function () {
      let response = await axios.get(
        Domain.APP_DOMAIN + configBackendApi.Get_Daily_Sales_Report,
        Domain.APP_HEADER
      )
      return response.data
    },
    getSalesStatics: async function () {
      let response = await axios.get(
        Domain.APP_DOMAIN + configBackendApi.Get_Daily_Sales_Statics_Report,
        Domain.APP_HEADER
      )
      return response.data
    },
    getDailyFamousMainDish: async function () {
      let response = await axios.get(
        Domain.APP_DOMAIN + configBackendApi.Get_Famous_Main_Dish_Report,
        Domain.APP_HEADER
      )
      return response.data
    },
    getDailyFamousSideDish: async function () {
      let response = await axios.get(
        Domain.APP_DOMAIN + configBackendApi.Get_Famous_Side_Dish_Report,
        Domain.APP_HEADER
      )
      return response.data
    },
    getDailySuitableDish: async function () {
      let response = await axios.get(
        Domain.APP_DOMAIN + configBackendApi.Get_Suitable_Dishes_Report,
        Domain.APP_HEADER
      )
      return response.data
    }
  }
}
