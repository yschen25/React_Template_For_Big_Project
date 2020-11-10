import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  width: 100vw;
  padding: 10px 15px;
  display: flex;
  align-items:center;
`;

const NavLeft = styled.div`
  width: 33.333%;
  float: left;
`;

const NavLink = styled.div`
  width: 33.333%;
  justify-content:space-around;
`;

function Header() {
    return (
        <Nav>
            <NavLeft>Website</NavLeft>
            <NavLink><Link to="/">Home</Link></NavLink>
            <NavLink><Link to="/story">Story</Link></NavLink>
            <NavLink><Link to="/memberData">Member Data</Link></NavLink>
        </Nav>
    );
}

export default Header;