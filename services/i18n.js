
import * as Localization from 'expo-localization'
import i18n from 'i18n-js';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

export const getLanguage = () => {
  return Localization.locale.split('-')[0]
}

export const setLang = () => {
  const en = {
    checkit: 'Check it out...',
    startover: 'Start over',
    "ready?": "Am I ready for my journey?"
  };
  const fr = {
    checkit: 'Je vérifie...',
    startover: 'Recommencer',
    "ready?": "Êtes vous prêt⋅e à partir ?"
  };

  i18n.fallbacks = true;
  i18n.translations = { fr, en };
  i18n.locale = Localization.locale;
  console.log("Set local " + i18n.locale)
}

export default {
  setLang,
  getLanguage
}
