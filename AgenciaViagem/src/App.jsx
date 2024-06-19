import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import Escocia from './Components/Escocia.jsx'
import China from './Components/China.jsx'
import GrandCanyon from './Components/GrandCanyon.jsx'
import Aruba from './Components/Aruba.jsx'
import Footer from './Components/Footer.jsx'


function App() {

  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/Escocia' element={<Escocia/>}/>
          <Route path='/GrandCanyon' element={<GrandCanyon/>}/> 
          <Route path='/China' element={<China/>}/> 
          <Route path='/Aruba' element={<Aruba/>}/> 
        </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
