import { Box, FormGroup, TextField, Typography } from '@mui/material';
import { useFilters } from '../../hooks/useFilters';

export const Filters = () => {
  const { minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange } =
    useFilters();

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
    </FormGroup>
  );
};
