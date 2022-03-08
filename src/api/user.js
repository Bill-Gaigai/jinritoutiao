import request from '../utils/request'

// 登录页面——表单验证
export const authorizations = data => request({
    method: "POST",
    url: '/v1_0/authorizations',
    data
})

// 登录页面——发送验证码
export const sendSms = mobile => request({
    method: "GET",
    url: `/v1_0/sms/codes/${mobile}`, //get方式请求，使用es6语法的模板字符串拼接参数

})