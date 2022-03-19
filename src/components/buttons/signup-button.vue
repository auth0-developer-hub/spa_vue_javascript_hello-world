<template>
  <button class="button__sign-up" @click="handleSignUp">Sign Up</button>
</template>

<script>
export default {
  methods: {
    handleSignUp() {
      this.$auth0.loginWithRedirect({
        screen_hint: "signup",
      });
    },
  },
};
</script>
