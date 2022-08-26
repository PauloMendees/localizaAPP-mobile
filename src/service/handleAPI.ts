import axios from 'axios'
import useAsyncStorage from '../hooks/asyncStorage/useAsyncStorage'

export const api = async (type?: 'register' | 'reset' | 'login') => {
    let keyName = 'navigationToken';

    if(type === 'login') keyName = ''
    if(type === 'register') keyName = 'registerToken'
    if(type === 'reset') keyName = 'resetToken'

    const {getData} = useAsyncStorage()

    const token = await getData(keyName)

    console.log(token)

    const apiWithHeaders = axios.create({
        baseURL: 'https://backend-localiza-soft.herokuapp.com/api',
        headers: {
          'Authorization': token ? `Bearer ${token}` : ``
        }
    })

    return apiWithHeaders
}