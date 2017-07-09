<template>
  <div id="app" class="container">
    <gallery-stage></gallery-stage>
  </div>
</template>

<script>
import GalleryStage from './components/GalleryStage.vue'
export default {
  name: 'app',
  components: { GalleryStage }
}
</script>

<style lang="less" scoped >
  html, body{
    width: 100%;
    height: 100%;
    background-color: #ddd;
    overflow: hidden;
  }
  .container {
    width: 100%;
    height: 100vh;
    background-color: #ddd;
    overflow: hidden;
  }
</style>
