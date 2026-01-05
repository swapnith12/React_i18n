import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          title: "Naukri for Blue Collar Jobs",
          greeting: "Hello",
          enter_name: "Enter your first name and last name!",
          firstname: "First Name",
          lastname: "Last Name",
          plumber: "Plumber",
          driver: "Driver",
          mechanic: "Mechanic",
          submit: "Submit",
          jobs: "Jobs",
          payment: "Payment",
          role: "Role",
          company: "Company",
          verified: "Verified",
          not_verified: "Not Verified",
          apply: "Apply",
          applied: "Applied"
        }
      },
      hi: {
        translation: {
          title: "ब्लू कॉलर नौकरियाँ",
          greeting: "नमस्ते",
          enter_name: "अपना पहला नाम और अंतिम नाम दर्ज करें!",
          firstname: "पहला नाम",
          lastname: "अंतिम नाम",
          plumber: "प्लंबर",
          driver: "ड्राइवर",
          mechanic: "मैकेनिक",
          submit: "जमा करें",
          jobs: "नौकरियाँ",
          payment: "वेतन",
          role: "भूमिका",
          company: "कंपनी",
          verified: "सत्यापित",
          not_verified: "असत्यापित",
          apply: "आवेदन करें",
          applied: "आवेदन किया"
        }
      }
    }
  })

export default i18n
