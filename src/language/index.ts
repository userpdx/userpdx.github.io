import { createI18n } from 'vue-i18n';
import EN from './EN'; // 英文

const languageList = ['en'];
const language =
	languageList.find((item) => navigator.language.indexOf(item) >= 0) ?? 'en';
console.log(language);

export default createI18n({
	legacy: false,
	locale: language,
	messages: {
		en: EN,
	},
});
