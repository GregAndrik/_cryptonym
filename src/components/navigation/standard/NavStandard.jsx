import { Link } from 'react-router-dom';
import CustomLink from '../shared/CustomLink';
import './navStandard.css'

const NavStandard = () => {
  return (
    <nav className='nav-standard'>
      <Link to='/' className='nav-standard-site-title'>_cryptonym</Link>
      <ul>
        <CustomLink to='/Encryption'>Encryption</CustomLink>
        <CustomLink to='/Decryption'>Decryption</CustomLink>
      </ul>
    </nav>
  )
}

export default NavStandard;
