<template>
  <span @click="handleClick" class="mobile-nav-bar__toggle material-icons">
    close
  </span>
</template>

<script>
export default {
  props: {
    handleClick: Function,
  },
};
</script>
