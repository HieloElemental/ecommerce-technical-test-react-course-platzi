import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inputProductsByTitle, setInputProductsByTitle] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=40"
      );
      const data = await response.json();
      await setProducts(data);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  };

  const clearError = () => {
    setError(false);
  };

  const filterProducts = (products, category, titleQuery) => {
    let filtered = [...products];

    if (category)
      filtered = filtered.filter((product) => product.category === category);

    if (titleQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(titleQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const applyFilters = () => {
    setFilteredProducts(
      filterProducts(products, selectedCategory, inputProductsByTitle)
    );
  };

  const handleCategoryChange = async (category) => {
    await setSelectedCategory(category);
    applyFilters();
  };

  useEffect(() => {
    !error && fetchData();
  }, [error]);

  useEffect(() => {
    applyFilters();
  }, [products, selectedCategory, inputProductsByTitle]);

  return {
    products,
    isLoading,
    error,
    setInputProductsByTitle,
    inputProductsByTitle,
    filteredProducts,
    clearError,
    setSelectedCategory: handleCategoryChange,
  };
};

export { useProducts };
