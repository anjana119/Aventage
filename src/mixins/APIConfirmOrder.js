import Domain from './domain'
import axios from 'axios'
import configBackendApi from '@/data/Config_Backend_Api'

export default {
  methods: {
    confirmOrder: async function (arr) {
      try {
        let response = await axios.post(
          Domain.APP_DOMAIN + configBackendApi.Confirm_Order_Details,
          arr,
          Domain.APP_HEADER
        )
        return response.data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
