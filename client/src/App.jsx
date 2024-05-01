import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import './App.css'
import infoState from './context/infoState'
import Detail from './component/Detail'
function App() {
  return (
  <>
  <div class='container'>
  <BrowserRouter>
  <infoState>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Detail/>} path='/detail'/>
      
    </Routes>
    </infoState>
  </BrowserRouter>
  </div>
  </>
  )
}

export default App
