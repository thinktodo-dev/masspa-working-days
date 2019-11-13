import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Hello": "Hello world.",
          "i18n": "This is I18n",
          "workingDays_monday":"monday :",
          "workingDays_tuesday":"tuesday :",
          "workingDays_wednesday":"wednesday :",
          "workingDays_thursday":"thursday :",
          "workingDays_friday":"friday :",
          "workingDays_saturday":"saturday :",
          "workingDays_sunday":"sunday :",
          "workingsDay_branch":"branch",
          "workingsDay_branches":"branches",
          "workingsDay_time":"working hours",
          "workingsDay_contact": "contact"
        }
      },
      vn: {
        translations: {
          "Hello": "Chào bạn",
          "i18n": "Đây là I18n",
          "workingDays_monday":"thứ hai",
          "workingDays_tuesday":"thứ ba",
          "workingDays_wednesday":"thứ tư",
          "workingDays_thursday":"thứ năm",
          "workingDays_friday":"thứ sáu",
          "workingDays_saturday":"thứ bảy",
          "workingDays_sunday":"chủ nhật",
          "workingsDay_branch": "chi nhánh",
          "workingsDay_branches":"hệ thống chi nhánh",
          "workingsDay_time":"thời gian làm việc",
          "workingsDay_contact": "liên hệ"
        }
      }
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  });

export default i18n;