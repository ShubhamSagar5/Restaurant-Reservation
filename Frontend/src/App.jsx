import './App.css'
import {Outlet} from 'react-router-dom'
import Home from './Pages/Home'
import {Toaster} from 'react-hot-toast'
import Success from './Pages/Success'
import NotFound from './Pages/NotFound'

function App() {
  
  return (
    <div>
      <Toaster/>
      <Outlet/>
    </div>
  )
}






export default App
