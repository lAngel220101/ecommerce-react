import axios from 'axios'

const baseURL = 'https://ecomerce-master.herokuapp.com/api/v1/item'

const getData = (id = '') => {
  const setId = id ? `/${id}` : ''
  const req = axios.get(baseURL + setId)
  const res = req
  return res
}

export { getData }
