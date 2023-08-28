import { useState, useEffect } from 'react';
import NavStandard from '../standard/NavStandard';
import NavMobile from '../mobile/NavMobile';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600); // Breakpoint for nav switch
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <NavMobile /> : <NavStandard />}
    </>
  );
};

export default Nav;