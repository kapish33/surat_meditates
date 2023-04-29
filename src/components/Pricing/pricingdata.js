import { G_FORM } from '../../../utils/nameConst';

export const pricingData = {
  pricingModel: [
    {
      popular: 'PRIME',
      planName: 'Sudarshan Kriya',
      price: 3000,
      monthlyOrYearlyPrice: 'course',
      list: [
        'Learn Sudarshan Kriya, a powerful breathing technique',
        'Practice at your own pace with pre-recorded sessions',
        'Access to guided meditation and relaxation techniques',
        'Improve your overall well-being and reduce stress',
        'Experience the benefits of Sudarshan Kriya in just a few sessions',
        'Suitable for beginners and experienced meditators alike',
      ],
      butonText: 'Enroll Now',
      buttonAction: () => {
        window.open(G_FORM.SudarshanKriya);
      },
      buttonBelowText: 'Sudarshan Kriya',
    },

    {
      popular: 'PRIME',
      planName: 'Sahaj Samadhi',
      price: 3000,
      monthlyOrYearlyPrice: 'course',
      list: [
        'Learn Sahaj Samadhi, a powerful meditation technique',
        'Practice at your own pace with pre-recorded sessions',
        'Access to guided meditation and relaxation techniques',
        'Experience deep relaxation and inner peace',
        'Improve your overall well-being and reduce stress',
        'Suitable for beginners and experienced meditators alike',
      ],
      butonText: 'Enroll Now',
      buttonAction: () => {
        window.open(G_FORM.SahajSamadhi);
      },
      buttonBelowText: 'Sahaj Samadhi',
    },
    {
      popular: 'IIM SPECIAL',
      planName: 'Mindful Leadership Program',
      price: 5000,
      monthlyOrYearlyPrice: 'program',
      list: [
        'Join our exclusive Mindful Leadership Program developed in collaboration with IIM professors',
        'Learn how mindfulness can enhance your leadership skills and decision-making abilities',
        'Practice meditation and mindfulness techniques that can help you manage stress and improve focus',
        'Network with other leaders and executives from various industries',
        'Get personalized coaching and feedback from our experienced instructors',
        'Improve your overall well-being and lead with greater purpose and clarity',
      ],
      butonText: 'Enroll Now',
      buttonAction: () => {
        window.open(G_FORM.IIM);
      },
      buttonBelowText: 'Mindful Leadership Program',
    },
  ],
};
