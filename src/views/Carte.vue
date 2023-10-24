<template class="page">
    <div>
        <br><br><br>
        <h1>Carte :</h1>
      <div class="background"></div>
    </div>
</template>
  
<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Carte',
    computed: {
    }
  }
</script>
  
<style scoped>
  .background {
    position: relative;
    min-height: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-image: url('../assets/images/carte.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

.image-container img {
    width: 100%;
}
</style>
  