import styled from 'styled-components';

export const theme = {
  textColor: '#000',
  fontSize: '1rem',
  fontWeight: '700',
  hoverColor: '#f90', // hover text color like the image (orange)
  transition: '0.3s ease-in-out',
};

export const NavBarContainer = styled.nav`
  width: 100%;
  position: relative;
  background-color: #fff; /* White background */
  border-bottom: 3px solid #f90; /* Orange bottom border */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const NavBarTopStrip = styled.div`
  width: 100% ! important;
  height: 10px;
  background-color: #00a2a9; /* Turquoise top strip */
`;

export const NavBarLogo = styled.div`
  flex: 1;
`;

export const NavBarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: #fff;
    flex-direction: column;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    visibility: ${({ clicked }) => (clicked ? 'visible' : 'hidden')};
    opacity: ${({ clicked }) => (clicked ? 1 : 0)};
    pointer-events: ${({ clicked }) => (clicked ? 'auto' : 'none')};
    transition: all 0.3s ease;
  }
`;

export const NavBarItem = styled.li`
  padding: 15px 20px;
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight};
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColor};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.hoverColor}; /* Orange hover effect */
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const MobileButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #000;
    font-size: 1.5rem;
  }
`;
