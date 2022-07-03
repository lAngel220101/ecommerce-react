import { getData } from '../services/getProduct'
import { useEffect, useState } from 'react'

const useGetDataOfProduct = (id) => {
  const [listProducts, setListProducts] = useState(id ? {} : [])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        console.log(id)
        const { data } = await getData(id)
        setListProducts(data)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [id])
  return { listProducts, loading, error }
}

export default useGetDataOfProduct
