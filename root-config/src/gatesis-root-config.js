import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const data = {
  loaders: {
    headerLoader: `<nav> loading </nav>`,
  },
};

const routes = constructRoutes(microfrontendLayout, data);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* webpackIgnore: true */ name);
  },
});
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();
