import { siteRoutes } from '../../../utils/sitePaths';
import homeImage from '../../assets/images/logo.png';
const { landingPagesNav } = siteRoutes;

export const headerRoutes = {
  homePage: {
    path: landingPagesNav.home,
    name: 'Logo',
    imagePath: homeImage,
  },
  mobile: [
    {
      path: landingPagesNav.Products,
      css: 'anchor_nonunderline_mobile',
      name: 'Products',
    },
    {
      path: landingPagesNav.Pricing,
      css: 'anchor_nonunderline_mobile',
      name: 'Pricing',
    },
    {
      path: landingPagesNav.Resources,
      css: 'anchor_nonunderline_mobile',
      name: 'Resources',
    },
    {
      path: landingPagesNav.Login,
      css: 'anchor_nonunderline_mobile',
      name: 'Login',
    },
    {
      path: landingPagesNav['Sign Up'],
      css: 'anchor_button_mobile',
      name: 'Sign Up',
    },
  ],
  pc: [
    {
      path: landingPagesNav.Products,
      css: 'anchor_pc',
      name: 'Products',
    },
    {
      path: landingPagesNav.Products,
      css: 'anchor_pc',
      name: 'Pricing',
    },
    {
      path: landingPagesNav.Resources,
      css: 'anchor_pc',
      name: 'Resources',
    },
    {
      path: landingPagesNav.Resources,
      css: 'anchor_pc',
      name: 'Login',
    },
    {
      path: landingPagesNav['Sign Up'],
      css: 'anchor_pc_button',
      name: 'Sign Up',
    },
  ],
};
