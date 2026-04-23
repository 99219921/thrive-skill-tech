export type Language = "en" | "hi" | "mr";

type Dict = {
  nav: {
    home: string;
    about: string;
    courses: string;
    webinar: string;
    contact: string;
    faq: string;
    login: string;
    signup: string;
  };
  dashboards: {
    student: string;
    admin: string;
    overview: string;
    courses: string;
    students: string;
    payments: string;
    settings: string;
  };
  common: {
    exploreCourses: string;
    joinWebinar: string;
    contactUs: string;
    applyNow: string;
    enrollNow: string;
    language: string;
  };
};

export const translations: Record<Language, Dict> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      webinar: "Free Webinar",
      contact: "Contact",
      faq: "FAQ",
      login: "Login",
      signup: "Signup"
    },
    dashboards: {
      student: "Student Dashboard",
      admin: "Admin Dashboard",
      overview: "Overview",
      courses: "Courses",
      students: "Students",
      payments: "Payments",
      settings: "Settings"
    },
    common: {
      exploreCourses: "Explore Courses",
      joinWebinar: "Join Free Webinar",
      contactUs: "Contact Us",
      applyNow: "Apply Now",
      enrollNow: "Enroll Now",
      language: "Language"
    }
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      courses: "कोर्स",
      webinar: "फ्री वेबिनार",
      contact: "संपर्क",
      faq: "सवाल",
      login: "लॉगिन",
      signup: "साइन अप"
    },
    dashboards: {
      student: "स्टूडेंट डैशबोर्ड",
      admin: "एडमिन डैशबोर्ड",
      overview: "ओवरव्यू",
      courses: "कोर्स",
      students: "स्टूडेंट्स",
      payments: "पेमेंट्स",
      settings: "सेटिंग्स"
    },
    common: {
      exploreCourses: "कोर्स देखें",
      joinWebinar: "फ्री वेबिनार जॉइन करें",
      contactUs: "संपर्क करें",
      applyNow: "अभी आवेदन करें",
      enrollNow: "अभी नामांकन करें",
      language: "भाषा"
    }
  },
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      courses: "कोर्सेस",
      webinar: "फ्री वेबिनार",
      contact: "संपर्क",
      faq: "प्रश्नोत्तरे",
      login: "लॉगिन",
      signup: "साइनअप"
    },
    dashboards: {
      student: "विद्यार्थी डॅशबोर्ड",
      admin: "अॅडमिन डॅशबोर्ड",
      overview: "आढावा",
      courses: "कोर्सेस",
      students: "विद्यार्थी",
      payments: "पेमेंट्स",
      settings: "सेटिंग्स"
    },
    common: {
      exploreCourses: "कोर्सेस पाहा",
      joinWebinar: "फ्री वेबिनार जॉइन करा",
      contactUs: "संपर्क करा",
      applyNow: "आता अर्ज करा",
      enrollNow: "आता प्रवेश घ्या",
      language: "भाषा"
    }
  }
};
