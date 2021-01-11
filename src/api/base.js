import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'
import router from '../router'

let service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 20000,
  headers: {
    'content-type': 'application/json'
  }
})

service.interceptors.request.use(
  config => {
    var url = ['/api/Message/GetUnreadMessages', '/api/Message/Read']
    if (url.indexOf(config.url) === -1) {
      Indicator.open({
        text: 'Loading...',
        spinnerType: 'snake'
      })
    }
    return config
  }
)

service.interceptors.response.use(
  response => {
    const data = response.data
    if (data !== null && data.result === 0 && data.message) {
      Toast(data.message)
    }
    Indicator.close()
    return data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          Toast('认证出错，请重新登录')
          Indicator.close()
          sessionStorage.removeItem('userInfo')
          router.push({ name: 'index' })
          return ''
      }
    }
    console.log(error)
  },
  Indicator.close()
)

/**
 * @param url api網址
 * @param data 資料
 * @param needAuth 是否需要送token
 */
export function post (url, data, needAuth) {
  if (needAuth) {
    return service.post(url, data, {
      // headers: { authorization: `${JSON.parse(sessionStorage.getItem('token'))}` }
      headers: { authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNDM5ZTU0MS03OGY0LTRjYjItODhlNi01YWQ2NDliYTc5MGMiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQyODc2LyIsImlhdCI6MTYwMjQ4NTU5NiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMDAwMTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTAwMDEyfHx8cGV0ZXIwMDF8fHwzfHx8MHx8fDN8fHxwZXRlcjAwMSIsIm5iZiI6MTYwMjQ4NTU5NiwiZXhwIjoxNjAyNjU4Mzk2LCJhdWQiOiJBbnkifQ.-ElH9LzJqOhhEET8JV-9BeYxx0-HALqFjqzR5GLeGkg" }
    })
  } else {
    return service.post(url, data)
  }
}

/**
 * @param url api網址
 * @param params 資料
 * @param needAuth 是否需要送token
 */
export function get (url, params, needAuth) {
  if (needAuth) {
    return service.get(url, {
      params,
      // headers: {
      //   authorization: `${JSON.parse(sessionStorage.getItem('token'))}`
      // }
      headers: { authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNDM5ZTU0MS03OGY0LTRjYjItODhlNi01YWQ2NDliYTc5MGMiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQyODc2LyIsImlhdCI6MTYwMjQ4NTU5NiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIxMDAwMTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTAwMDEyfHx8cGV0ZXIwMDF8fHwzfHx8MHx8fDN8fHxwZXRlcjAwMSIsIm5iZiI6MTYwMjQ4NTU5NiwiZXhwIjoxNjAyNjU4Mzk2LCJhdWQiOiJBbnkifQ.-ElH9LzJqOhhEET8JV-9BeYxx0-HALqFjqzR5GLeGkg" }


    })
  } else {
    return service.get(url, { params })
  }
}

export default service
