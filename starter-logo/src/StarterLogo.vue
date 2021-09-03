<template>
  <div :class="`logo logo-${size}`">
    <img :src="heroImg" />
  </div>
  <header class="starter-title">Starter {{ name }}</header>
</template>
<script>
export default {
  props: {
    name: { type: String },
    heroImg: { type: String },
    size: { type: String, default: 'normal' },
  },
};
</script>
<style lang="scss" scoped>
.logo-normal {
  height: 5rem;
}

.logo-big {
  height: 10rem;
}

.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    max-width: 100%;
    height: 100%;
  }
}

.starter-title {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
