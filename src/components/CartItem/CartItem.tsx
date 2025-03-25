import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { ICartItem } from '../../types/products';

interface ICartItemProps extends ICartItem {
  removeFromOrder: (id: number) => void;
}

export const CartItem = ({ id, image, price, title, removeFromOrder }: ICartItemProps) => {
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
          primary={` Price: $${price}`}
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
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
