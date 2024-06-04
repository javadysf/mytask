const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));
  return false;
};
const clearStorage = () => {
  localStorage.clear();
};

export {
  setItem,
  getItem,
  clearStorage,
};
