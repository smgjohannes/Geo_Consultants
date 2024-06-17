import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/RME25_001.png';

import {
  NavBarContainer,
  NavBarList,
  NavBarItem,
  MobileButton,
} from './NavBarStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from './NavBarStyles'; // Importing the theme object from NavBarStyles

const NavBar = ({ navbar, ...props }) => {
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
          <Link to='/' className='logo'>
            <img
              src={logoImage}
              alt='Logo'
              style={{
                height: '250px',
                width: '100%',
                objectFit: 'cover',
                margin: '0 0 20px 0',
              }}
            />
          </Link>

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
            <button className={clicked ? 'FaTimes' : 'FaBars'}>
              {clicked ? <FaTimes /> : <FaBars />}
            </button>
          </MobileButton>
        </NavBarContainer>
      </ThemeProvider>
    </>
  );
};

export default NavBar;
