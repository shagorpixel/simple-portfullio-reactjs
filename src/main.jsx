import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import ServicePage from './Pages/Service/ServicePage.jsx'
import PortfullioPage from './Pages/Portfullio/PortfullioPage.jsx'
import BlogPage from './Pages/Blog/BlogPage.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<Home></Home>
      },
      {
        path:'/services',
        element:<ServicePage></ServicePage>
      },
      {
        path:'/portfullio',
        element:<PortfullioPage></PortfullioPage>
      },
      {
        path:'/blog',
        element:<BlogPage></BlogPage>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
