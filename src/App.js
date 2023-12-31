import NavCore from './components/navigation/shared/NavCore';
import Home from './components/views/home/Home';
import Encryption from './components/views/encryption-decryption/Encryption';
import Decryption from './components/views/encryption-decryption/Decryption';
import { Route, Routes } from 'react-router-dom';

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
      </div>
    </>
  )
}

export default App;