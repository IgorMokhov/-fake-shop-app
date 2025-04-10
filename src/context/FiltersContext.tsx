import React, { ChangeEvent, createContext, useState } from 'react';

interface IFiltersContext {
  isOpen: boolean;
  minPrice: number | null;
  maxPrice: number | null;
  selectedCategories: string[];
  toggleSidebar: (newOpen: boolean) => void;
  handleMinPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMaxPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (e: ChangeEvent<HTMLInputElement>, category: string) => void;
}

export const FiltersContext = createContext<IFiltersContext | null>(null);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  console.log(selectedCategories);

  const toggleSidebar = (newOpen: boolean) => {
    setIsOpen(newOpen);
  };

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value === '' ? null : Number(value));
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value === '' ? null : Number(value));
  };

  const handleCategoryChange = (
    e: ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((item) => item !== category));
    }
  };

  return (
    <FiltersContext.Provider
      value={{
        isOpen,
        minPrice,
        maxPrice,
        selectedCategories,
        toggleSidebar,
        handleMinPriceChange,
        handleMaxPriceChange,
        handleCategoryChange,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
