import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  SearchOutlined,
  HomeOutlined,
  AccountBalanceWalletOutlined,
  AccountCircleOutlined,
} from '@material-ui/icons';
import { IMenuInferior } from './MenuInferior.interface';
import { MenuTab } from './MenuTab.enum';
import { useHistory } from 'react-router-dom';
import redirectURL from './redirectURL';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

function MenuInferior({ tab = MenuTab.INICIO }: IMenuInferior) {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState(tab);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue: MenuTab) => {
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

export default MenuInferior;
