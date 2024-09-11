import { useState, useEffect } from 'react';

const PREFIX = 'codepen clone';
const useLocalStorage = (key, intialValue) => {
  const prefixKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof intialValue === 'function') {
      return intialValue();
    } else {
      return intialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);
  return [value, setValue];
};
export default useLocalStorage;
