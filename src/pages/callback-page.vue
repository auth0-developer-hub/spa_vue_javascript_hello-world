<template>
  <div class="page-layout">
    <NavBar />
    <MobileNavBar />
    <div class="page-layout__content">
      <slot />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navigation/desktop/nav-bar.vue";
import MobileNavBar from "@/components/navigation/mobile/mobile-nav-bar.vue";

export default {
  components: {
    NavBar,
    MobileNavBar,
  },
};
</script>
