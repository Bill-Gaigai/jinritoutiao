import request from '../utils/request'

// 登录页面——表单验证
export const authorizations = data => request({
    method: "POST",
    url: '/v1_0/authorizations',
    data
})