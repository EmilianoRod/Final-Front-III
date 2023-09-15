import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Header from './components/Header'
import DentistDetail from './routes/DentistDetail';
import Footer from './components/Footer';
import Favourites from './routes/Favourites';
import Contact from './routes/Contact';
import { useThemeContext } from './context/ThemeContext';


function App() {

  const {contextTheme} = useThemeContext();


  return (
    <>

    <Header/>
    <div id={contextTheme} className='main'>

    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/dentist/:id" element={<DentistDetail/>} />
      <Route path="/contacto" element={<Contact/>} />
      <Route path="/favs" element={<Favourites/>} />
      

    </Routes>
    </div>

    <Footer/>
    </>
  )
}

export default App;
