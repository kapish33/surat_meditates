export const HOST = 'http://localhost:3000'; // your domain name

export const CommonSeo = {
  DEFAULT_TITLE: 'Surat Meditation | Art Of Living',
  DEFAULT_DESCRIPTION:
    'The Art of Living Foundation- a humanitarian organisation devoted for betterment of society, brings smiles by yoga, meditation, Sudarshan Kriya &amp; life skills.Yoga | Meditation | Sudarshan Kriya | The Art of Living India',
};
function defaultSeoGenerator(title, description) {
  return {
    title,
    description,
  };
}

export const SEO = {
  aboutUsSeo: defaultSeoGenerator(
    'About Us',
    'About us Page For Tax Related Things'
  ),
};
