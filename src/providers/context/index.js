import React, { createContext, useReducer } from 'react';
import defaultContext from './defaultContext';

const AppContext = createContext({
  state: {},
  dispatch: action => {}
});

const { Provider, Consumer } = AppContext;

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return defaultContext;
    case 'setTheme':
      return { ...state, themeName: action.themeName };
    case 'setLang':
      return { ...state, siteLang: action.siteLang };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const AppContextConsumer = Consumer;

export { AppContext, AppContextConsumer, AppContextProvider };
