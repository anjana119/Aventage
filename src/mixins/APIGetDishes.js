import Domain from './domain'
import axios from 'axios'
import configBackendApi from '@/data/Config_Backend_Api'

export default {
  methods: {
    fetchMainDishes: async function () {
      let response = await axios.get(
        Domain.APP_DOMAIN + configBackendApi.Get_Main_Dishes,
        Domain.APP_HEADER
      )
      return response.data
    },
    fetchSideDishes: async function () {
      let response = await axios.get(
        Domain.APP_DOMAIN + configBackendApi.Get_Side_Dishes,
        Domain.APP_HEADER
      )
      return response.data
    },
    fetchDesserts: async function () {
      let response = await axios.get(
        Domain.APP_DOMAIN + configBackendApi.Get_dessert,
        Domain.APP_HEADER
      )
      return response.data
    }
  }
}
