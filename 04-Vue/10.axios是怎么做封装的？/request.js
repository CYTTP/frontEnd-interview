import api from 'axios.js'

export const login = () => api({
    url:'',
    method:'get',
    params:params
})



//使用
import { login } from 'request.js'

method:{
    login().then(res => {
        console.log(res)
    })
}