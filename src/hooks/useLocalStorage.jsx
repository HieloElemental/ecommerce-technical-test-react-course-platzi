import { useEffect, useState } from "react";

const useLocalStorage = ({ itemName, initialValue }) => {
  const [item, setItem] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!error) {
      try {
        let initialItem = localStorage.getItem(itemName);

        if (!initialItem) {
          initialItem = initialValue;
          setItem(initialValue);
          localStorage.setItem(itemName, JSON.stringify(initialItem));
        } else {
          initialItem = JSON.parse(initialItem);
          setItem(initialItem);
        }
      } catch (e) {
        setError(e);
        console.log(e);
      }
    }

    setIsLoading(false);
  }, [itemName, error]);

  useEffect(() => {
    localStorage.setItem(itemName, JSON.stringify(item));
  }, [itemName, item]);

  const clearError = () => {
    setError(false);
  };

  return {
    item,
    setItem,
    isLoading,
    error,
    clearError,
  };
};

export { useLocalStorage };
