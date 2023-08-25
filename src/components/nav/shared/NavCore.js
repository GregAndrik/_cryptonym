import { useState, useEffect } from 'react';
import DesktopNavbar from '../standard/NavStandard';
import MobileNavbar from '../mobile/NavMobile';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 499); // Breakpoint for nav switch
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </>
  );
};

export default Nav;