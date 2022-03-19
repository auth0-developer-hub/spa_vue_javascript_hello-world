<template>
  <PageLayout>
    <div class="content-layout">
      <h1 class="content__title">Admin Page</h1>
      <div class="content__body">
        <p>
          This page retrieves an <strong>admin message</strong> from an external
          API.
          <br />
          <br />
          <strong>
            Only authenticated users with the
            <code>read:admin-messages</code> permission should access this page.
          </strong>
        </p>
        <CodeSnippet title="Admin Message" :code="message" />
      </div>
    </div>
  </PageLayout>
</template>

<script>
import CodeSnippet from "@/components/code-snippet.vue";
import PageLayout from "@/components/page-layout.vue";
import { getAdminResource } from "@/services/message-service";

export default {
  components: {
    PageLayout,
    CodeSnippet,
  },
  data() {
    return {
      message: "",
    };
  },
  async mounted() {
    const accessToken = await this.$auth0.getAccessTokenSilently();
    const { data, error } = await getAdminResource(accessToken);

    if (data) {
      this.message = JSON.stringify(data, null, 2);
    }

    if (error) {
      this.message = error.message;
    }
  },
};
</script>
