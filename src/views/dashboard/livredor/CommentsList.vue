<template>
  <div>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        ({{comment.author}}) {{ comment.title }} : {{ comment.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import {getComments} from '@/services/from_datasets/livredor.service'

export default {
  data() {
    return {
      comments: []
    }
  },
  async mounted() {
    this.comments = await getComments(this.$store.state.auth.user.providerId)
  }
}
</script>

<style scoped></style>
