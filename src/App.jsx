
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Header from './component/Header'
import Footer from './component/Footer'


function App() {
  

  return (
    <>
     
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/contact' element= {<Contact/>} />
        <Route path='/services' element= {<Services/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </>
  )
}

export default App
