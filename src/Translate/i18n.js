import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navbar: {
            home: 'Home',
            about: 'About',
            brandbook: 'Brandbook',
            contact: 'Contact',
            login: 'Login',
            forGirlsAndParents: 'For Girls & Parents',
            keepGirlsInSchool: 'Keep Girls in School',
            company: 'Company',
            periodCalculator: 'Period Calculator',
          },
          menu: {
            firstPeriod: {
              title: 'My First Period',
              description: 'Understand what to expect during your first period.',
            },
            periodGuide: {
              title: 'Period Guide',
              description: 'A complete guide to menstrual health and care.',
            },
            puberty: {
              title: 'Puberty',
              description: 'Learn about the changes your body goes through.',
            },
            parentTips: {
              title: 'Tips for Parents',
              description: 'Helpful tips for parents to support their children.',
            },
          },
          companyItems: {
            about: 'Who is Ben?',
            brandbook: 'Learn more about Ben\'s brand',
            careers: 'Find out what it\'s like to work at Ben & view our open roles',
            contact: 'Reach out for help, partnership, or enquiries',
            hiringBadge: 'We\'re hiring!',
          },
          section: {
            title: 'Experience Luxury Comfort',
            description: 'Indulge in the epitome of softness and absorbency with our premium pads.',
            button: 'Shop Now',
          },
        },
      },
      தமிழ்: {
        translation: {
          navbar: {
            home: 'முகப்பு',
            about: 'எங்களை பற்றி',
            services: 'சேவைகள்',
            contact: 'தொடர்பு கொள்ளவும்',
            login: 'உள்நுழையவும்',
            forGirlsAndParents: 'பெண்கள் மற்றும் பெற்றோருக்கு',
            keepGirlsInSchool: 'பெண்களை பள்ளியில் வைத்திருங்கள்',
            company: 'நிறுவனம்',
            periodCalculator: 'மாதவிடாய் கணிப்பான்',
          },
          menu: {
            firstPeriod: {
              title: 'எனது முதல் மாதவிடாய்',
              description: 'உங்கள் முதல் மாதவிடாயில் எதிர்பார்க்க வேண்டியவை அறியவும்.',
            },
            periodGuide: {
              title: 'மாதவிடாய் வழிகாட்டி',
              description: 'மாதவிடாய் ஆரோக்கியம் மற்றும் பராமரிப்பு பற்றிய முழுமையான வழிகாட்டி.',
            },
            puberty: {
              title: 'மாற்றம்',
              description: 'உங்கள் உடலில் உள்ள மாற்றங்களைப் பற்றிச் தெரிந்து கொள்ளுங்கள்.',
            },
            parentTips: {
              title: 'பெற்றோருக்கான குறிப்புகள்',
              description: 'உங்கள் குழந்தைகளை ஆதரிக்க உதவிகரமான குறிப்புகள்.',
            },
          },
          companyItems: {
            about: 'பேன் யார்?',
            brandbook: 'பேனின் பிராண்டைப் பற்றிய மேலும் அறிக',
            careers: 'பேனில் வேலை செய்யக்கூடியதாக என்னவென்று தெரிந்து கொள்ளுங்கள்',
            contact: 'உதவி அல்லது தொடர்புக்கு எங்களை அணுகவும்',
            hiringBadge: 'நாங்கள் வேலைவாய்ப்பு வழங்குகிறோம்!',
          },
          section: {
            title: 'வாய்ப்பு சிரமம் இல்லாமல் அனுபவிக்கவும்',
            description: 'எங்கள் உயர்தர பட்ஸ் மூலம் மென்மையும் உறிஞ்சும் திறனும் உங்களுக்கு அனுபவிக்கக்கூடியதாக மாற்றுகிறது.',
            button: 'இப்போது வாங்க',
          },
        },
      },
      Hn: {
        translation: {
          navbar: {
            home: 'मुखपृष्ठ',
            about: 'हमारे बारे में',
            services: 'सेवाएँ',
            contact: 'संपर्क करें',
            login: 'लॉग इन करें',
            forGirlsAndParents: 'लड़कियों और माता-पिता के लिए',
            keepGirlsInSchool: 'लड़कियों को स्कूल में रखें',
            company: 'कंपनी',
            periodCalculator: 'मासिक धर्म कैलकुलेटर',
          },
          menu: {
            firstPeriod: {
              title: 'मेरा पहला मासिक धर्म',
              description: 'अपने पहले मासिक धर्म में क्या उम्मीद करें, यह समझें।',
            },
            periodGuide: {
              title: 'मासिक धर्म गाइड',
              description: 'मासिक धर्म स्वास्थ्य और देखभाल के लिए पूरी गाइड।',
            },
            puberty: {
              title: 'किशोरावस्था',
              description: 'अपने शरीर में होने वाले बदलावों को जानें।',
            },
            parentTips: {
              title: 'माता-पिता के लिए सुझाव',
              description: 'अपने बच्चों का समर्थन करने के लिए सहायक सुझाव।',
            },
          },
          companyItems: {
            about: 'बेन कौन है?',
            brandbook: 'बेन के ब्रांड के बारे में अधिक जानें',
            careers: 'बेन में काम करना कैसा है, जानें और हमारी खुली भूमिकाएँ देखें',
            contact: 'सहायता, साझेदारी, या सामान्य पूछताछ के लिए संपर्क करें',
            hiringBadge: 'हमHiring कर रहे हैं!',
          },
          section: {
            title: 'विलासिता का अनुभव करें आराम',
            description: 'हमारे प्रीमियम पैड्स के साथ कोमलता और अवशोषण के सर्वोत्तम अनुभव में लिप्त हो जाइए।',
            button: 'अभी खरीदें',
          },
        },
      },
    },
  });

export default i18n;
