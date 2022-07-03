import { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [sms, setSms] = useState({ type: '' })

  const handleFilterProducts = (value) => {
    const filtered = products.filter(product => {
      return product.product_name.toLowerCase().match(value.toLowerCase())
    })

    if (filtered.length === 0) {
      setFilterProducts([])
      setSms({
        type: 'error',
        message: 'Producto no encontrado'
      })
    } else {
      setFilterProducts(filtered)
      setSms({
        type: 'success',
        message: 'Productos encontrados'
      })
    }
  }

  const initialValue = {
    setProducts,
    handleFilterProducts,
    filterProducts,
    sms
  }
  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
