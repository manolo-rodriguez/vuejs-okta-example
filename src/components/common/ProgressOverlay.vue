<template>
  <div class="progress-overlay">
    <div class="progress-overlay--text">
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressOverlay'
}
</script>

<style scoped>
  .progress-overlay {
    opacity: 0.9;
    background: #fff;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    position: fixed;
    color: #000;
    text-align: center;
  }
  .progress-overlay--text {
    position: relative;
    top: 50%;
  }
</style>
