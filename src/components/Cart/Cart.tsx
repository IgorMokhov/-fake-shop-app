import { List, Typography } from '@mui/material';
import { useProducts } from '../../hooks/useProducts';
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
  const { order, totalPrice, removeFromOrder } = useProducts();

  return (
    <>
      <Typography variant="h4">Cart</Typography>
      {order.length ? (
        <>
          <List sx={{ width: '100%', py: 4 }}>
            {order.map((item) => (
              <CartItem {...item} removeFromOrder={removeFromOrder} key={item.id} />
            ))}
          </List>
          <Typography variant="h5">Total Price: ${totalPrice.toFixed(2)}</Typography>
        </>
      ) : (
        <Typography sx={{ textAlign: 'center', py: 20 }} variant="h5" component="p">
          Cart is empty, please add items!
        </Typography>
      )}
    </>
  );
};
