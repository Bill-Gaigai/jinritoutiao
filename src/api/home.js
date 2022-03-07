import request from '../utils/request'


// 首页——获取频道数据

export const channels = params => request({
    url: '/v1_0/channels',
    params
})

// 首页——获取文章列表
export const articles = params => request({
    url: '/v1_0/articles',
    params
})