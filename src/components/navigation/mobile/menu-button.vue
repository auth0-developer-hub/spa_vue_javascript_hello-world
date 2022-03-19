<template>
  <span @click="handleClick" class="mobile-nav-bar__toggle material-icons">
    menu
  </span>
</template>

<script>
export default {
  props: {
    handleClick: Function,
  },
};
</script>
