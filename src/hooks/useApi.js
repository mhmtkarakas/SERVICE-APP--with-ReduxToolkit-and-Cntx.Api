import axios from 'axios'

export default function useApi(){
    axios.defaults.baseURL = '...'

    return axios
}