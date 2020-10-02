import React from 'react';
import styled from 'styled-components';

const Switch = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    cursor: pointer;
    & img {
        width: 100%;
    }
    @media (max-width: 500px) {
        right: 1rem;
    }
`;

export default function ThemeSwitch({ theme, toggleTheme }) {
    return (
        <Switch onClick={toggleTheme}>
            <img src={theme === 'light' ? 'sun.svg' : 'moon.svg'} alt='' />
        </Switch>
    );
}