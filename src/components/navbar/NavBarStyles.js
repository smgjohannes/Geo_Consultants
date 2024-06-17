import styled from 'styled-components';
export const theme = {
  textColor: 'black',
  fontSize: '0.9rem',
  fontWeight: '700',
  transition: '0.3s ease-in-out',
};

export const NavBarContainer = styled.nav`
  position: fixed; /* Make the container fixed */
  top: 0; /* Position it at the top of the viewport */
  left: 0; /* Align it to the left */
  width: 100%; /* Make it full width */
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Outfit', sans-serif;
  background: #fff;
  padding: 0 20px;
  z-index: 9000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: 100px;
`;

export const NavBarList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  list-style: none;
  @media screen and (max-width: 56.96em) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px; /* Adjust the top position based on your navbar height */
    left: 0;
    width: 100%;
    background: gray;
    opacity: 0.9;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    visibility: ${({ clicked }) => (clicked ? 'visible' : 'hidden')};
    opacity: ${({ clicked }) => (clicked ? 1 : 0)};
    pointer-events: ${({ clicked }) => (clicked ? 'auto' : 'none')};
  }
`;

export const NavBarItem = styled.li`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight};
  transition: ${({ theme }) => theme.transition};
  padding: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const MobileButton = styled.div`
  color: #3a3270;
  display: none;
  @media screen and (max-width: 56.96em) {
    display: block;
  }
`;
