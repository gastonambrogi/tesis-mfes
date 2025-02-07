import { registerApplication, start } from "single-spa";

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
