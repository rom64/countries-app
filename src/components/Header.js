import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from "./Container";
const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: (--colors-ui-base);
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    color: var(--colors-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    cursor: pointer;
`;
const Title = styled(Link).attrs({
    to: '/'
})`
    text-decoration: none;
`;
const ModeSwitcher = styled.div`
  text-transform: capitalize;
    
`;


const Header = () => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect (() =>{
        document.body.setAttribute('data-theme', theme);
    }, [theme]);
    
    return(
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>
                        Where is the world ?
                    </Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoon size='14px'/> : <IoMoonOutline size='14px'/>}
                        <span style={{marginLeft: '0.75rem'}}>
                             {theme} Theme
                        </span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )

}
export { Header };