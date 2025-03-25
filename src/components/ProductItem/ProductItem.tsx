import { Button, Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import { ICartItem, IProduct } from '../../types/products';

interface IProductItemProps extends IProduct {
  ordered: boolean;
  addToOrder: (product: ICartItem) => void;
  removeFromOrder: (id: number) => void;
}

export const ProductItem = ({
  id,
  image,
  title,
  category,
  price,
  ordered,
  addToOrder,
  removeFromOrder,
}: IProductItemProps) => {
  const handleClick = () => {
    if (ordered) {
      removeFromOrder(id);
    } else {
      addToOrder({ id, title, price, image, quantity: 1 });
    }
  };

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
          <Button
            sx={{ position: 'absolute', bottom: 20, right: 0 }}
            variant="text"
            onClick={handleClick}
          >
            {ordered ? 'remove from cart' : 'add to cart'}
          </Button>
        </CardContent>
      </Card>
    </Grid2>
  );
};
