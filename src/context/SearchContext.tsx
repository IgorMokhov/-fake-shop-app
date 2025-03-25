import { ChangeEvent, createContext, ReactNode, useState } from 'react';

interface ISearchContext {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<ISearchContext | null>(null);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <SearchContext.Provider value={{ value, handleChange }}>{children}</SearchContext.Provider>
  );
};
