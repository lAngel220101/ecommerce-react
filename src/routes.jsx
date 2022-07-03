import { Navigate, useRoutes } from 'react-router-dom'

// pages
import App from './pages/App'
import Login from './pages/Login'

// components
import Products from './components/Products'
import Product from './components/Product'
import Search from './components/Search'

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/login' replace />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/products',
      element: <App />,
      children: [
        {
          element: <Products />,
          index: true
        },
        {
          path: 'product/:name',
          element: <Product />
        },
        {
          path: 'search',
          element: <Search />
        }

      ]
    },
    {
      path: '/404',
      element: <p className='text-center'>Page not found</p>
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return element
}

export default Paths
