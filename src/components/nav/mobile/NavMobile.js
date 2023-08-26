import CustomLink from '../shared/CustomLink';
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineEnhancedEncryption, MdOutlineNoEncryptionGmailerrorred } from 'react-icons/md'
import './navMobile.css'; 

const MobileNavbar = () => {
  return (
    <nav className='mobile-nav'>
      <CustomLink to='/' className='mobile-nav-link'><AiOutlineHome /></CustomLink>
      <CustomLink to='/Encryption' className='mobile-nav-link'><MdOutlineEnhancedEncryption /></CustomLink>
      <CustomLink to='/Decryption' className='mobile-nav-link'><MdOutlineNoEncryptionGmailerrorred /></CustomLink>
    </nav>
  );
};

export default MobileNavbar;