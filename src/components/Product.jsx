// import { useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'

const Product = () => {
  const id = window.location.href.slice(39)
  const url = `https://ecomerce-master.herokuapp.com/api/v1/item/${id}`

  const {
    data: product,
    error
  } = useFetcher(url)

  if (error) return <p>{error}</p>

  return (
    <article>
      <div className='card' style={{ width: '18rem' }}>
        <img src={product.image} className='card-img-top img-thumbnail' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{product.product_name}</h5>
          <p className='card-text'>{product.description}</p>
          <a className='btn btn-primary'>Buy</a>
        </div>
      </div>
    </article>
  )
}
export default Product
