import { G_FORM } from '../../../utils/nameConst';
import { siteRoutes } from '../../../utils/sitePaths';
import { number, whatsAppURL } from '../../../utils/whatsappHelper';
import homeImage from '../../assets/images/logo.png';
const { landingPagesNav } = siteRoutes;

export const headerRoutes = {
  homePage: {
    path: landingPagesNav.home,
    name: 'Logo',
    imagePath: homeImage,
  },
  mobile: [
    // {
    //   path: landingPagesNav.Products,
    //   css: 'anchor_nonunderline_mobile',
    //   name: 'Products',
    // },
    {
      path: landingPagesNav.Pricing,
      css: 'anchor_nonunderline_mobile',
      name: 'Pricing',
    },
    {
      path: G_FORM.FreeIntroSession,
      css: 'anchor_nonunderline_mobile',
      name: 'Introductory Session',
    },
    {
      path: `tel:${number}`,
      css: 'anchor_nonunderline_mobile',
      name: 'Call',
    },
    {
      path: whatsAppURL(),
      css: 'anchor_button_mobile',
      name: 'Whats App',
    },
  ],
  pc: [
    // {
    //   path: landingPagesNav.Products,
    //   css: 'anchor_pc',
    //   name: 'Products',
    // },
    {
      path: landingPagesNav.Pricing,
      css: 'anchor_pc',
      name: 'Pricing',
    },
    {
      path: G_FORM.FreeIntroSession,
      css: 'anchor_pc',
      name: 'Introductory Session',
    },
    {
      path: `tel:${number}`,
      css: 'anchor_pc',
      name: 'Call',
    },
    {
      path: whatsAppURL(),
      css: 'anchor_pc_button',
      name: 'Whats App',
    },
  ],
};
