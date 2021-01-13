import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../containers/about/styles';

const Header = () => {

    const HeaderWrap = styled.ul`
        width: 100vw;
        margin: 0;
        padding: 0;
        display : flex;
        border-bottom: 1px solid #e1e1e1;
    `;

    const MenuItem = styled.li`
        margin: 10px 0;
        padding: 5px 15px;
        font-size: 16px;
        list-style: none;
        font-weight: bold;
    `;

    return (
        <HeaderWrap>
            <MenuItem><Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/reactHooks">Nav 1</Link></MenuItem>
            <MenuItem><Link to="/reactHooksAndRedux">Nav 2</Link></MenuItem>
        </HeaderWrap>
    );
};

export default Header;