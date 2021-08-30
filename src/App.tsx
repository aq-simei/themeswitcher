import Header from '../src/Components/Header';

import {GlobalStyle} from './Styles/global';

import {ThemeProvider} from 'styled-components'
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';
import { useState } from 'react';
import usePersistedState from './Hooks/usePersistedState'

function App() {

  const [theme, setTheme] = usePersistedState('theme', light)


  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };
  return (
    <ThemeProvider theme ={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme = {toggleTheme} />

      </div>
    </ThemeProvider>
  );
}

export default App;
