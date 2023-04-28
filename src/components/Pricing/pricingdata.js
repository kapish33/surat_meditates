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
        console.log('magic');
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
        console.log('magic');
      },
      buttonBelowText: 'Sahaj Samadhi',
    },

    {
        popular: "FREE",
        planName: "Introductory Session",
        price: 0,
        monthlyOrYearlyPrice: "session",
        list: [
          "Join our free introductory session to learn about our meditation programs",
          "Discover the benefits of meditation and how it can help you reduce stress",
          "Experience a guided meditation and relaxation technique",
          "Meet our instructors and learn more about our courses",
          "No commitment or payment required for the introductory session"
        ],
        butonText: "Register Now",
        buttonAction: () => {
          console.log("magic");
        },
        buttonBelowText: "Introductory Session",
      },      
  ],
};
