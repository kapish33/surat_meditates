export const HOST = 'https://www.suratmeditates.org'; // your domain name

export const CommonSeo = {
  DEFAULT_TITLE:
    'Surat Meditates | Guided Meditations and Breathwork Exercises for Inner Peace and Mindfulness',
  DEFAULT_DESCRIPTION:
    'Find inner peace and mindfulness with Surat Meditates - your go-to platform for guided meditations and breathwork exercises. Join our community today to start your journey towards a more peaceful, fulfilling life.',
};
function defaultSeoGenerator(title, description) {
  return {
    title,
    description,
  };
}

export const SEO = {
  aboutUsSeo: defaultSeoGenerator(
    'About Surat Meditates - Our Mission and Team',
    'Learn more about Surat Meditates and our mission to help people find inner peace and mindfulness through guided meditations, Sudarshan Kriya, Sahaj Samadhi, and breathwork exercises. Meet our team of experts and discover how we can support your journey towards a more peaceful, fulfilling life.'
  ),
  termsAndConditions: defaultSeoGenerator(
    'Surat Meditates - Terms and Conditions',
    'Read our terms and conditions to learn about the guidelines for using Surat Meditates, including practices such as Sudarshan Kriya and Sahaj Samadhi. Discover our policies for user conduct, content, and privacy, as well as our disclaimers and limitations of liability. Use our platform with confidence and peace of mind.'
  ),
};
