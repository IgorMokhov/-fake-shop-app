import { Button, Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import { IProduct } from '../../types/products';

interface IProductItemProps extends Omit<IProduct, 'description'> {}

export const ProductItem = ({ image, title, category, price }: IProductItemProps) => {
  return (
    <Grid2>
      <Card sx={{ width: 345, height: 450, p: 3 }}>
        <CardMedia
          sx={{
            height: 260,
            objectFit: 'contain',
            width: '100%',
            backgroundSize: 'contain',
          }}
          image={image}
          title={title}
        />
        <CardContent sx={{ position: 'relative' }}>
          <Typography sx={{ minHeight: 70 }} variant="h6" component="h6" fontWeight={600}>
            {title.length > 40 ? `${title.slice(0, 40)}...` : title}
          </Typography>
          <Typography variant="h6" component="span">
            {category}
          </Typography>
          <Typography variant="h5" component="h5">
            ${price}
          </Typography>
          <Button sx={{ position: 'absolute', bottom: 20, right: 0 }} variant="text">
            add to cart
          </Button>
        </CardContent>
      </Card>
    </Grid2>
  );
};
