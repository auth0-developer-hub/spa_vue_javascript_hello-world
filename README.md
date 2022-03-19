# Vue.js/JavaScript: Basic Code Sample

This JavaScript code sample demonstrates how to build a Vue.js Single-Page Application (SPA).

Visit the ["Vue.js/JavaScript Apps: Security and Identity Management"](https://auth0.com/developers/hub/code-samples/spa/vue-javascript) section of the ["Auth0 Developer Hub"](https://auth0.com/developers/hub) to explore how you can secure this Vue.js application by implementing authentication using Auth0.

[![Security and Identity Management for Vue.js and JavaScript](https://cdn.auth0.com/blog/hub/code-samples/spa/vue-javascript.png)](https://auth0.com/developers/hub/code-samples/spa/vue-javascript)

## Run the Project

Install the project dependencies:

```bash
npm install
```

The starter Vue.js project offers a functional application that consumes data from an external API to hydrate the user interface. For simplicity and convenience, the starter project simulates the external API locally using [`json-server`](https://github.com/typicode/json-server).

However, you can also integrate this starter project with any of the ["Hello World" API code samples, which are available in multiple backend frameworks and programming languages](https://github.com/orgs/auth0-developer-hub/repositories?language=&q=api+hello-world&sort=&type=public).

The compatible API server runs on `http://localhost:6060` by default. As such, to connect your Vue.js application with that API server, create a `.env` file under the root project directory and populate it with the following environment variables:

```bash
VUE_APP_API_SERVER_URL=http://localhost:6060
```

Next, execute the following command to run the JSON server API:

```bash
npm run api
```

Finally, open another terminal tab and execute this command to run your Vue.js application:

```bash
npm run serve
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.

In the starter project, all the starter Vue.js application routes are public. However, you can use Auth0 to get an ID token to hydrate the user profile information present in the `/profile` page with information from a real user. With Auth0, you can also get an access token to make a secure call to an external API to hydrate the messages present in the `/protected` and `/admin` pages.
