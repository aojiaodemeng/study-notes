const singleSpaDefaults = require("webpack-config-single-spa");
const { merge } = require("webpack-merge");

module.exports = () => {
  const defaultConfig = singleSpaDefaults({
    orgName: "xyOrg",
    projectName: "no-frame-base",
  });
  return merge(defaultConfig, {
    devServer: {
      port: 9001,
    },
  });
};
