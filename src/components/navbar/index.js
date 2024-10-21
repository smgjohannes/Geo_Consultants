import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/RME25_001.png';

import {
  NavBarContainer,
  NavBarList,
  NavBarItem,
  MobileButton,
  NavBarTopStrip,
  NavBarLogo,
} from './NavBarStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from './NavBarStyles';

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleNavLinkClick = (path) => {
    handleClick();
    navigate(path);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBarContainer>
          <NavBarTopStrip />
          <NavBarLogo>
            <Link to='/'>
              <img src={logoImage} alt='Logo' style={{ height: '100px' }} />
            </Link>
          </NavBarLogo>

          <NavBarList className={clicked ? 'active' : ''}>
            <NavBarItem onClick={() => handleNavLinkClick('/company')}>
              COMPANY
            </NavBarItem>
            <NavBarItem onClick={() => handleNavLinkClick('/about')}>
              ABOUT US
            </NavBarItem>
            <NavBarItem onClick={() => handleNavLinkClick('/services')}>
              SERVICES
            </NavBarItem>
            <NavBarItem onClick={() => handleNavLinkClick('/contact')}>
              CONTACT US
            </NavBarItem>
          </NavBarList>

          <MobileButton onClick={handleClick}>
            <button>{clicked ? <FaTimes /> : <FaBars />}</button>
          </MobileButton>
        </NavBarContainer>
      </ThemeProvider>
    </>
  );
};

export default NavBar;
