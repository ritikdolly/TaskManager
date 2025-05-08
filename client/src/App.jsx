import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'


const App=()=> {
  const router= createBrowserRouter([
    {path:'/',element:<Dashboard/>},
    {path:'/dashboard',element:<Dashboard/>},
    {path:'/tasks',element:<Tasks/>},
    {path:'/completed/:status',element:<Dashboard/>},
    {path:'/completed',element:<Dashboard/>},
   ])
 return(
   <RouterProvider router={router} />
 )
}

export default App
