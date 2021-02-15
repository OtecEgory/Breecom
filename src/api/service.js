import axios from 'axios'

export const сards = async () => {
   return axios.get('http://oteckirill.somee.com/api/Card')
}

export const contry = async () => {
   return axios.get('https://restcountries.eu/rest/v2/all')
}