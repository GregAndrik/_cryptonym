import NavCore from './components/nav/shared/NavCore';
import Home from './components/views/home/Home';
import Encryption from './components/views/Encryption';
import Decryption from './components/views/Decryption';
import Footer from './components/footer/Footer'
import { Route, Routes} from 'react-router-dom';

// Rendering Home, Encryption, Decryption pages along with Navbar and Footer
const App = () => {
  return (
    <>
      <div>
        <NavCore/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/encryption' element = {<Encryption/>} />
          <Route path='/decryption' element = {<Decryption/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App;