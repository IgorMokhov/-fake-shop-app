import {  Drawer, List, ListItem } from '@mui/material';
import { Filters } from '../Filters/Filters';

interface ISidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: ISidebarProps) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List sx={{ width: 350 }}>
        <ListItem>
          <Filters />
        </ListItem>
      </List>
    </Drawer>
  );
};
