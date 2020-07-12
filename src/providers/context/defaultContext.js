import { LOCALES } from '../i18n';
import THEMES from '../themes/themeList';
import { getFromStorage } from '../../util/storageFunctions';

export default {
  themeName: getFromStorage('themeName') || THEMES.BASIC,
  siteLang: getFromStorage('siteLang') || LOCALES.ENGLISH,
  name: 'Max'
};
