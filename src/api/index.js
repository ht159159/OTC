// import service from './base'
import { get, post } from './base'

// 設定是否需要傳送token驗證 預設沒寫為不用
// const needAuth = true

// 玩家信息获取
export const apiInfo = (params, needAuth) => {
  return get('/api/Member/Info', params, needAuth)
}

// 设置安全码
export const apiSetSafeCode = (params, needAuth) => {
  return get('/api/Member/SetSafeCode', params, needAuth)
}

// 读取消息
export const apiRead = (params, needAuth) => {
  return get('/api/Message/Read', params, needAuth)
}

// 发送消息
export const apiSend = (params, needAuth) => {
  return post('/api/Message/Send', params, needAuth)
}

// 未读消息提示
export const apiGetUnreadMessages = (params, needAuth) => {
  return get('/api/Message/GetUnreadMessages', params, needAuth)
}

// 账户列表
export const apiAccounts = (params, needAuth) => {
  return get('/api/Account/Accounts', params, needAuth)
}

// 账户详情
export const apiDetails = (params, needAuth) => {
  return get('/api/Account/Details', params, needAuth)
}

// 新增账户
export const apiInsert = (params, needAuth) => {
  return post('/api/Account/Insert', params, needAuth)
}

// 编辑账户
export const apiEdit = (params, needAuth) => {
  return post('/api/Account/edit', params, needAuth)
}

// 删除账户
export const apiDelete = (params, needAuth) => {
  return get('/api/Account/Delete', params, needAuth)
}

// 广告列表
export const apiAdverts = (params, needAuth) => {
  return get('/api/Market/Adverts', params, needAuth)
}

// 广告详细信息
export const apiAdvertsDetails = (params, needAuth) => {
  return get('/api/Market/AdvertDetails', params, needAuth)
}

// 购买
export const apiBuy = (params, needAuth) => {
  return post('/api/Market/Buy', params, needAuth)
}

// 出售
export const apiSell = (params, needAuth) => {
  return post('/api/Market/Sell', params, needAuth)
}

// 订单列表
export const apiOrders = (params, needAuth) => {
  return get('/api/Market/Orders', params, needAuth)
}

// 订单详情
export const apiOrderDetails = (params, needAuth) => {
  return get('/api/Market/OrderDetails', params, needAuth)
}

// 更新订单
export const apiUpdateOrder = (params, needAuth) => {
  return post('/api/Market/UpdateOrder', params, needAuth)
}

// 链上充值
export const apiDespoits = (params, needAuth) => {
  return get('/api/Market/Despoits', params, needAuth)
}

// 上传图片
export const apiUploadImg = (params, needAuth) => {
  return post('/api/Uploader/UploadImg', params, needAuth)
}
