import axios from '../libs/api.request'

// 验证Token
export const textGet = () => {
    return axios.request({
      url: 'reactApi/get',
      method: 'get'
    })
}
