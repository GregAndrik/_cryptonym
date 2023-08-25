import HomeContent from './HomeContent';
import argus from '../../../assets/argus-logo.png';
import './home.css'

const Home = () => {
  return (
    <>
    <div className='home-container'>
      <div className='home-background'>
        <img className='home-image' src={argus} alt='Argus logo'/>
      </div>
    </div>
    <div className='home-content-container'>
      <HomeContent/>
    </div>
    </>
  );
}

export default Home;