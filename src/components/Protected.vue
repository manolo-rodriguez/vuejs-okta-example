<template>
  <div>
    <h1>
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Protected',
  data () {
    return {
      title: 'This is a protected route!'
    }
  }
}
</script>
