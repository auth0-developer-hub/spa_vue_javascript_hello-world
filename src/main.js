import Vue from "vue";
import App from "./app.vue";
import "./assets/css/styles.css";
import { Auth0Plugin } from "./auth0-plugin";
import { router } from "./router";

Vue.config.productionTip = false;

Vue.use(Auth0Plugin, {
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.VUE_APP_AUTH0_CALLBACK_URL,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetPath
        ? appState.targetPath
        : window.location.pathname
    );
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
