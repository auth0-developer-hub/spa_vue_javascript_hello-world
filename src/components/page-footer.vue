<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-grid__info">
        <div class="footer-info__message">
          <p class="footer-message__headline">
            <span>This sample application is brought to you by&nbsp;</span>
            <PageFooterHyperlink path="https://auth0.com/"
              >Auth0</PageFooterHyperlink
            >
          </p>
          <p class="footer-message__description">
            <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">
              <span>
                Securely implement authentication using Auth0 on any stack and
                any device
              </span>
              <u>in less than 10 minutes</u>
            </PageFooterHyperlink>
          </p>
        </div>
        <div class="footer-info__button">
          <button class="button button--secondary" @click="signUp">
            Create Free Auth0 Account
          </button>
        </div>
        <div class="footer-info__resource-list">
          <div
            v-bind:key="resource.path"
            v-for="resource in resourceList"
            class="footer-info__resource-list-item"
          >
            <PageFooterHyperlink :path="resource.path">
              {{ resource.label }}
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
      <div class="footer-grid__brand">
        <div class="footer-brand">
          <img
            class="footer-brand__logo"
            src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
            alt="Auth0"
            width="20"
            height="22.22"
          />
          <PageFooterHyperlink path="https://auth0.com/">
            Auth0 Inc
          </PageFooterHyperlink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import PageFooterHyperlink from "@/components/page-footer-hyperlink.vue";

export default {
  components: {
    PageFooterHyperlink,
  },
  data() {
    const resourceList = [
      {
        path: "https://auth0.com/why-auth0/",
        label: "Why Auth0",
      },
      {
        path: "https://auth0.com/docs/get-started",
        label: "How It Works",
      },
      {
        path: "https://auth0.com/blog/developers/",
        label: "Developer Blog",
      },
      {
        path: "https://auth0.com/contact-us",
        label: "Contact an Expert",
      },
    ];

    return {
      resourceList,
    };
  },
  methods: {
    signUp() {
      window.open("https://auth0.com/signup", "_blank", "noopener noreferrer");
    },
  },
};
</script>
