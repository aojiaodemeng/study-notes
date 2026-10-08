import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication({
  name: "@xyOrg/no-frame-base",
  activeWhen: "/no-frame-base",
  app: () => System.import("@xyOrg/no-frame-base"),
});

registerApplication({
  name: "@xyOrg/react-frame-base",
  activeWhen: "/react-frame-base",
  app: () => System.import("@xyOrg/react-frame-base"),
});

applications.forEach(registerApplication);
layoutEngine.activate();
start();
