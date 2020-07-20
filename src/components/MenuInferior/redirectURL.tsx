import { MenuTab } from './MenuTab.enum';

function redirectURL(tab: MenuTab): string {
  switch (tab) {
    case MenuTab.BUSCA:
      return '/busca';
    case MenuTab.CARTEIRAS:
      return '/carteiras';
    case MenuTab.PERFIL:
      return '/perfil';
    default:
      return '/';
  }
}

export default redirectURL;
