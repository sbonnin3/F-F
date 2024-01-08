<template>
  <span class="lang-changer">
    <v-icon>mdi-translate</v-icon>
    <select
      v-model="$i18n.locale"
      aria-label="sélection de la langue de l'application"
    >
      <option v-for="lang in $i18n.availableLocales" :key="lang" :value="lang">
        {{ getFlagEmoji(lang) }}
      </option>
    </select>
  </span>
</template>

<script>
export default {
  methods: {
    getFlagEmoji(lang) {
      if (lang === "en") lang = "gb";

      const codePoints = lang
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
      return String.fromCodePoint(...codePoints);
    },
  },
};
</script>

<style scoped>
.lang-changer {
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;

  select {
    min-width: 20px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }

  i {
    color: white;
    font-size: 1.3rem;
  }

  border: 1px solid white;
  padding: 5px;
}
</style>
