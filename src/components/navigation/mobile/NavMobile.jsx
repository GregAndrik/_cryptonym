import CustomLink from '../shared/CustomLink';
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineEnhancedEncryption, MdOutlineNoEncryptionGmailerrorred } from 'react-icons/md'
import './navMobile.css'; 

const NavMobile = () => {
  return (
    <nav className='nav-mobile'>
      <CustomLink to='/' className='nav-mobile-link'><AiOutlineHome /></CustomLink>
      <CustomLink to='/Encryption' className='nav-mobile-link'><MdOutlineEnhancedEncryption /></CustomLink>
      <CustomLink to='/Decryption' className='nav-mobile-link'><MdOutlineNoEncryptionGmailerrorred /></CustomLink>
    </nav>
  );
};

export default NavMobile;