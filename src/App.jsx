import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home/index'
import Header from './components/Header'
import {Provider} from 'react-redux'
import Store from './Redux/Store'
import PageRoutes from './Routes/Routes'
import Footer from './components/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header />
    <PageRoutes />
    <Footer />
    </>
  )
}

export default App
