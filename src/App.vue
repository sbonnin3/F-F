<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  watch: {
    '$i18n.locale': function (newVal) {
      localStorage.setItem('user.locale', newVal)
    }
  },
}
</script>

<style>
  /* Reset du style par défaut et ajout de styles de base */
  body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
  }


  /* Material Symbols */
  @font-face {
    font-family: 'Material Symbols';
    font-style: normal;
    font-weight: 400;
    src: url(@/assets/fonts/MaterialSymbolsRounded.woff2) format('woff2');
  }

  .material-symbols {
  font-family: 'Material Symbols';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}
</style>
