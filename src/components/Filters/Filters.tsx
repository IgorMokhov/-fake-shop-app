import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useFilters } from '../../hooks/useFilters';

export const Filters = () => {
  const {
    minPrice,
    maxPrice,
    selectedCategories,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleCategoryChange,
  } = useFilters();

  return (
    <FormGroup>
      <Typography sx={{ py: 1 }} variant="h6" component="p">
        Price
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }} component="div">
        <TextField
          value={minPrice ?? ''}
          onChange={handleMinPriceChange}
          id="min-price"
          label="Minimal price"
          variant="outlined"
          type="number"
        />
        <TextField
          value={maxPrice ?? ''}
          onChange={handleMaxPriceChange}
          id="max-price"
          label="Maximum price"
          variant="outlined"
          type="number"
        />
      </Box>

      <Typography sx={{ pt: 4 }} variant="h6" component="p">
        Category
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
          control={
            <Checkbox
              name="mensClothing"
              checked={selectedCategories.includes('mensClothing')}
              onChange={(e) => handleCategoryChange(e, 'mensClothing')}
            />
          }
          label="Men's clothing"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="womensClothing"
              checked={selectedCategories.includes('womensClothing')}
              onChange={(e) => handleCategoryChange(e, 'womensClothing')}
            />
          }
          label="Women's clothing"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="electronics"
              checked={selectedCategories.includes('electronics')}
              onChange={(e) => handleCategoryChange(e, 'electronics')}
            />
          }
          label="Electronics"
        />

        <FormControlLabel
          control={
            <Checkbox
              name="jewelery"
              checked={selectedCategories.includes('jewelery')}
              onChange={(e) => handleCategoryChange(e, 'jewelery')}
            />
          }
          label="Jewelery"
        />
      </Box>
    </FormGroup>
  );
};
