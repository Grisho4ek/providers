export const saveToStorage = (name, value) => {
  if (!window || !window.localStorage) return;
  window.localStorage.setItem(name, JSON.stringify(value));
};

export const getFromStorage = name => {
  if (!window || !window.localStorage) return null;

  try {
    return JSON.parse(window.localStorage.getItem(name));
  } catch (err) {
    console.log(err);
    return null;
  }
};
