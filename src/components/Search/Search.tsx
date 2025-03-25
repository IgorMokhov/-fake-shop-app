import { TextField } from '@mui/material';
import { useSearch } from '../../hooks/useSearch';

export const Search = () => {
  const { value, handleChange } = useSearch();

  return (
    <TextField
      sx={{ mb: 8 }}
      value={value}
      onChange={handleChange}
      label="search"
      variant="standard"
      fullWidth
      type="search"
    />
  );
};
