import React, { useContext } from 'react';
import { LOCALES } from '../../providers/i18n';
import { AppContext } from '../../providers/context';
import { saveToStorage } from '../../util/storageFunctions';

const LangSwitcher = () => {
  const { dispatch } = useContext(AppContext);

  const setLang = siteLang => {
    saveToStorage('siteLang', siteLang);
    dispatch({
      type: 'setLang',
      siteLang
    });
  };

  return (
    <div>
      {Object.keys(LOCALES).map(locale => (
        <button key={locale} onClick={() => setLang(LOCALES[locale])}>
          {locale}
        </button>
      ))}
    </div>
  );
};

export default LangSwitcher;
