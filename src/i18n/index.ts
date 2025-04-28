import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enus from './locales/enus.json'
import ptbr from './locales/ptbr.json'
import eses from './locales/eses.json'

const resources = {
  enus: { translation: enus },
  ptbr: { translation: ptbr },
  eses: { translation: eses },
}

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallbackLng: 'ptbr',
})

export default i18n
