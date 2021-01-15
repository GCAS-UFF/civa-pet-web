import { NavMenuTab } from './NavMenuTab.enum';

function redirectURL(tab: NavMenuTab): string {
  switch (tab) {
    case NavMenuTab.SEARCH:
      return '/search';
    case NavMenuTab.WALLETS:
      return '/wallets';
    case NavMenuTab.PROFILE:
      return '/profile';
    default:
      return '/';
  }
}

export default redirectURL;
