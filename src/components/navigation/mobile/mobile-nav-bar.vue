<template>
  <div class="mobile-nav-bar__container">
    <nav class="mobile-nav-bar">
      <MobileNavBarBrand :handle-click="closeMenu" />
      <MenuButton
        v-if="menuStatus === MenuStates.CLOSED"
        :handle-click="openMenu"
      />
      <CloseButton
        v-if="menuStatus === MenuStates.OPEN"
        :handle-click="closeMenu"
      />
      <div v-if="menuStatus === MenuStates.OPEN" class="mobile-nav-bar__menu">
        <MobileNavBarTabs :close-menu="closeMenu" />
        <MobileNavBarButtons />
      </div>
    </nav>
  </div>
</template>

<script>
import CloseButton from "@/components/navigation/mobile/close-button.vue";
import MenuButton from "@/components/navigation/mobile/menu-button.vue";
import MobileNavBarBrand from "@/components/navigation/mobile/mobile-nav-bar-brand.vue";
import MobileNavBarButtons from "@/components/navigation/mobile/mobile-nav-bar-buttons.vue";
import MobileNavBarTabs from "@/components/navigation/mobile/mobile-nav-bar-tabs.vue";

export default {
  components: {
    CloseButton,
    MenuButton,
    MobileNavBarBrand,
    MobileNavBarButtons,
    MobileNavBarTabs,
  },
  data() {
    const MenuStates = {
      OPEN: "open",
      CLOSED: "closed",
    };
    return {
      MenuStates,
      menuStatus: MenuStates.CLOSED,
    };
  },
  methods: {
    closeMenu() {
      document.body.classList.remove("scroll-lock");
      this.menuStatus = this.MenuStates.CLOSED;
    },
    openMenu() {
      document.body.classList.add("scroll-lock");
      this.menuStatus = this.MenuStates.OPEN;
    },
  },
};
</script>
