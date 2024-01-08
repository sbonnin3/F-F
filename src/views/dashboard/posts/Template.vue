<template>
  <div class="posts">
    <v-container>
      <h1>{{ $t('dashboard.navigation.posts') }}</h1>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Posts',
  data () {
    return {
      //
    }
  }
}
</script>
