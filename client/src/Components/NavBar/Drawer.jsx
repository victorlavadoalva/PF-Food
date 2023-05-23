import Drawer from '@mui/material/Drawer';
import { DrawerContent } from './DrawerContent';
import { useState } from 'react';

export function TemporaryDrawer({ isOpen, toggleDrawer }) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  return (
    <Drawer
        anchor='left'
        open={isOpen}
        onClose={toggleDrawer}

    >
        <DrawerContent toggleDrawer={toggleDrawer}/>    
    </Drawer>
  );
}