<template>
    <div class="content">
      <ProviderProfile  :providerId="1"/>
    </div>
  </template>
  
  <script>
  import ProviderProfile from '@/components/public/ProviderProfile.vue'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Prestataire',
    components: {
      ProviderProfile
    }
  }
  </script>