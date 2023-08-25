import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineEnhancedEncryption } from 'react-icons/md'
import { MdOutlineNoEncryptionGmailerrorred } from 'react-icons/md'
import CustomLink from '../shared/CustomLink';
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