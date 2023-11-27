import VueI18n from 'vue-i18n'
import Vue from "vue";
import locales from "@/locales";

Vue.use(VueI18n)

function getLastLocaleOrDefault() {
    const lastLocale = localStorage.getItem('user.locale')
    if (lastLocale && locales[lastLocale]) {
        return lastLocale
    }
    return 'fr'
}

export default new VueI18n({
    locale: getLastLocaleOrDefault(),
    fallbackLocale: 'fr',
    messages: locales
})
