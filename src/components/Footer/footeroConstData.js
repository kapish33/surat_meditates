import { siteRoutes } from '../../../utils/sitePaths';
const { landingPagesNav } = siteRoutes;
export const footerConstRoutes = {
  footerNav: [
    {
      path: landingPagesNav.home,
      css: 'anchor-footer-nav ',
      name: 'Home',
    },
    {
      path: landingPagesNav.about,
      css: 'anchor-footer-nav ',
      name: 'About',
    },
    {
      path: landingPagesNav.Services,
      css: 'anchor-footer-nav',
      name: 'Services',
    },
    {
      path: landingPagesNav.Contact,
      css: 'anchor-footer-nav',
      name: 'Contact',
    },
  ],
};

export const Companyname = 'Surat Meditates';
export const Slogan = "Experience the Art of Living at Surat Meditates: Your Path to Inner Peace and Spiritual Growth"
