import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineWorkOutline} from 'react-icons/md'
import CustomLink from '../shared/CustomLink';
import './navMobile.css'; 

const MobileNavbar = () => {
  return (
    <nav className='mobile-nav'>
      <CustomLink to='/' className='mobile-nav-link'><AiOutlineHome /></CustomLink>
      <CustomLink to='/Encryption' className='mobile-nav-link'><AiOutlineUser /></CustomLink>
      <CustomLink to='/Decryption' className='mobile-nav-link'><MdOutlineWorkOutline /></CustomLink>
    </nav>
  );
};

export default MobileNavbar;