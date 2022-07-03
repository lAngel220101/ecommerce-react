import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'

const Search = () => {
  const { filterProducts, sms } = useAppContext()

  if (sms.type === 'error') {
    return (<p className='alert alert-danger' role='alert'>{sms.message}</p>)
  }

  if (sms.type === 'success') {
    return (
      <>
        <p className='alert alert-success' role='alert'>
          {sms.message} <span>{filterProducts.length}</span>
        </p>
        <section className='row gy-4'>
          {filterProducts.map((product, key) => (
            <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
              <Link to={`/products/product/${product._id}`}>
                <article className='card'>
                  <img loading='lazy' className='card-img-top' src={product.image} alt={product.product_name} />
                  <div className='card-body'>
                    <p className='card-title'>{product.product_name}</p>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </section>
      </>
    )
  }

  return (
    <p className='alert alert-info' role='alert'>Busque un pais</p>
  )
}
export default Search
