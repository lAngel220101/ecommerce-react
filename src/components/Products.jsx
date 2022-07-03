import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import useFetcher from '../hooks/useFetcher.jsx'

const Products = () => {
  const { setProducts } = useAppContext()

  const {
    data: products,
    error
  } = useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')

  if (error) return <p>{error.message}</p>

  useEffect(() => {
    setProducts(products)
  }, [])

  return (
    <section className='row gy-4'>
      {products.map((product, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`product/${product._id}`}>
            <article className='card'>
              <img loading='lazy' className='card-img-top' src={product.image} alt={product.product_name} />
              <div className='card-body'>
                <p className='card-title'>{product.product_name}</p>
                <p>${product.price}.00</p>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Products
