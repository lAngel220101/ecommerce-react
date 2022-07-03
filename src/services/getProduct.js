import axios from 'axios'

const baseURL = 'https://ecomerce-master.herokuapp.com/api/v1/item/'

const getData = async (id) => {
  const setId = id.toString()
  const req = await axios.get(baseURL + setId)
  const res = req
  return res
}

export { getData }
