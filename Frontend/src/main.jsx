import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Success from './Pages/Success.jsx'
import NotFound from './Pages/NotFound.jsx'





const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/success",
        element:<Success></Success>
      }
    ]
  },
  {
    path:"*",
    element:<NotFound></NotFound>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
