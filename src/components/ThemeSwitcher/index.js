import React, { useContext } from 'react';
import THEMES from '../../providers/themes/themeList';
import { AppContext } from '../../providers/context';
import { saveToStorage } from '../../util/storageFunctions';

const ThemeSwitcher = () => {
  const { dispatch } = useContext(AppContext);

  const setTheme = themeName => {
    saveToStorage('themeName', themeName);
    dispatch({
      type: 'setTheme',
      themeName
    });
  };

  return (
    <div>
      {Object.keys(THEMES).map(theme => (
        <button key={theme} onClick={() => setTheme(THEMES[theme])}>
          {theme}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
