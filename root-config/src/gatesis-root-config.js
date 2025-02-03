import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@gatesis/navbar",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "@gatesis/navbar"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@gatesis/header-mfe",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "//localhost:8080/gatesis-header-mfe.js"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
