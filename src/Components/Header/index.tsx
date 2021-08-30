import React, {useContext} from 'react';

import Switch from 'react-switch';

import {shade} from 'polished';

import {Container} from './style'


import {ThemeContext} from 'styled-components'; //acess to all properties's colors

interface Props{
    toggleTheme(): void;
}

const Header: React.FC<Props> = ( {toggleTheme} ) => {

    const {colors, title} = useContext(ThemeContext);

    return(
        <Container>
            Hello world
            <Switch
            onChange = {toggleTheme}
            checked = {title === 'dark'}
            checkedIcon = {false}
            uncheckedIcon = {false}
            height = {10}
            width = {40}
            handleDiameter = {20}
            offColor = {shade(0.1, colors.secondary)}
            onColor = {shade(0.1, colors.primary)}
            />
        </Container>
    );
};
export default Header;