import { useEffect, useState } from "react";

function useStorage(
  keyString: string,
  initialValue: string | undefined = undefined
) {
  const [storedValue, setStoredValue] = useState(() => {
    if (window) {
      const item = window.localStorage.getItem(keyString);

      return item ? JSON.parse(item) : initialValue;
    }

    return initialValue;
  });

  const setValue = (newValue: string) => {
    if (window) {
      setStoredValue(newValue);
      window.localStorage.setItem(keyString, newValue);
    }
  };

  const removeValue = () => {
    if (window) {
      setStoredValue(undefined);
      window.localStorage.removeItem(keyString);
    }
  };

  useEffect(() => {
    function updateValue() {
      const item = window.localStorage.getItem(keyString);

      if (item) setStoredValue(item);
    }

    if (window) {
      window.addEventListener("storage", updateValue);
    }

    return () => {
      window.removeEventListener("storage", updateValue);
    };
  }, [keyString]);

  return { storedValue, setValue, removeValue };
}

export default useStorage;
