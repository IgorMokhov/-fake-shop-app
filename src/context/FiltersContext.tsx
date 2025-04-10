import React, { ChangeEvent, createContext, useState } from 'react';

interface IFiltersContext {
  isOpen: boolean;
  toggleSidebar: (newOpen: boolean) => void;
  minPrice: number | null;
  maxPrice: number | null;
  handleMinPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMaxPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FiltersContext = createContext<IFiltersContext | null>(null);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

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

  return (
    <FiltersContext.Provider
      value={{
        isOpen,
        toggleSidebar,
        minPrice,
        maxPrice,
        handleMinPriceChange,
        handleMaxPriceChange,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
