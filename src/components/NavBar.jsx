import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'

const NavBar = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const { handleFilterProducts } = useAppContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimValue = searchRef.current.value.trim()
    if (trimValue !== '') {
      handleFilterProducts(trimValue)
      navigate('/products/search', { replace: true })
      event.target.reset()
    }
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
      <div className='container'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#mainNavBar' aria-controls='mainNavBar' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='mainNavBar'>
          <form className='d-flex' onSubmit={handleSubmit}>
            <input ref={searchRef} className='form-control me-2' type='search' placeholder='Search product' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>🔍</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
