import configBackendApi from '@/data/Config_Backend_Api'

let Domain = Object.freeze({
  live: configBackendApi.Api_Url
})
export const apiDomain = Domain.live

export default {
  APP_DOMAIN: apiDomain,
  get APP_HEADER () {
    // normal api call.
    const AuthStr = 'Bearer '.concat(configBackendApi.Api_token)
    return {
      headers: {
        Authorization: AuthStr
      }
    }
  },
  get APP_HEADER_FORM_DATA () {
    // form upload.
    const AuthStr = 'Bearer '.concat(configBackendApi.Api_token)
    return {
      headers: {
        Authorization: AuthStr,
        'Content-Type': 'multipart/form-data'
      }
    }
  }
}
