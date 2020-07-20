import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  SearchOutlined,
  HomeOutlined,
  AccountBalanceWalletOutlined,
  AccountCircleOutlined,
} from '@material-ui/icons';
import { IMenuInferior } from './MenuInferior.interface';
import { MenuTab } from './MenuTab.enum';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

function MenuInferior({ tab = MenuTab.INICIO }: IMenuInferior) {
  const classes = useStyles();
  const [value, setValue] = React.useState(tab);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log(event);
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
