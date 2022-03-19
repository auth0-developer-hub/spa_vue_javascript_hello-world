<template>
  <div class="mobile-nav-bar__tabs">
    <MobileNavBarTab
      path="/profile"
      label="Profile"
      :handle-click="closeMenu"
    />
    <MobileNavBarTab path="/public" label="Public" :handle-click="closeMenu" />
    <MobileNavBarTab
      path="/protected"
      label="Protected"
      :handle-click="closeMenu"
    />
    <MobileNavBarTab path="/admin" label="Admin" :handle-click="closeMenu" />
  </div>
</template>

<script>
import MobileNavBarTab from "@/components/navigation/mobile/mobile-nav-bar-tab.vue";

export default {
  components: { MobileNavBarTab },
  props: {
    closeMenu: Function,
  },
};
</script>
