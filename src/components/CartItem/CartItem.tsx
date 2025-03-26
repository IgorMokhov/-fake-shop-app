import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { Add, Delete, Remove } from '@mui/icons-material';
import { ICartItem } from '../../types/products';

interface ICartItemProps extends ICartItem {
  removeFromOrder: (id: number) => void;
  decreaseCount: (id: number) => void;
  addToOrder: (product: ICartItem) => void;
}

export const CartItem = ({
  id,
  image,
  price,
  title,
  quantity,
  removeFromOrder,
  decreaseCount,
  addToOrder,
}: ICartItemProps) => {
  const decreaseCountHandler = () => {
    if (quantity <= 1) return;
    decreaseCount(id);
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            onClick={() => removeFromOrder(id)}
            edge="end"
            aria-label="delete"
            size="large"
            color="primary"
          >
            <Delete />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt="title" src={image} />
        </ListItemAvatar>
        <ListItemText
          sx={{ width: '100%' }}
          primary={` Price: $${price.toFixed(2)}`}
          secondary={
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'text.primary', display: 'inline' }}
            >
              {title}
            </Typography>
          }
        />

        <Typography variant="h5" component="span">
          ${(price * quantity).toFixed(2)}
        </Typography>

        <ButtonGroup sx={{ mx: 3 }}>
          <Button aria-label="reduce" onClick={decreaseCountHandler}>
            <Remove fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => addToOrder({ id, image, price, title, quantity: 1 })}
          >
            <Add fontSize="small" />
          </Button>
        </ButtonGroup>
        <Typography variant="h6" component="span">
          Qty:{quantity}
        </Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
