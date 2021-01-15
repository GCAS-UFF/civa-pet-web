import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  SearchOutlined,
  HomeOutlined,
  AccountBalanceWalletOutlined,
  AccountCircleOutlined,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import redirectURL from './redirectURL';
import { NavMenuTab } from './NavMenuTab.enum';

interface BottomNavbarProps {
  tab?: NavMenuTab;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

function BottomNavbar({ tab = NavMenuTab.HOME }: BottomNavbarProps) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState(tab);

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue: NavMenuTab) => {
        setValue(newValue);
        history.push(redirectURL(newValue));
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Início" icon={<HomeOutlined />} />
      <BottomNavigationAction label="Busca" icon={<SearchOutlined />} />
      <BottomNavigationAction
        label="Carteiras"
        icon={<AccountBalanceWalletOutlined />}
      />
      <BottomNavigationAction label="Perfil" icon={<AccountCircleOutlined />} />
    </BottomNavigation>
  );
}

export default BottomNavbar;
