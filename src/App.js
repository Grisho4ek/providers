import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { I18nProvider } from './providers/i18n';
import translate from './providers/i18n/translate';
import LangSwitcher from './components/LangSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';
import { AppContext } from './providers/context';
import { getTheme } from './providers/themes/getTheme';
import { Header } from './styles';

function App() {
  const { state } = useContext(AppContext);

  return (
    <ThemeProvider theme={getTheme(state.themeName)}>
      <I18nProvider locale={state.siteLang}>
        <div className='App'>
          <Header>
            <LangSwitcher />
            {translate('hello', { name: state.name })}
            <ThemeSwitcher />
          </Header>
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
