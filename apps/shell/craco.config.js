const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "shell",
          remotes: {
            auth: "auth@http://localhost:3001/remoteEntry.js",
            dashboard: "dashboard@http://localhost:3002/remoteEntry.js",
            customers: "customers@http://localhost:3003/remoteEntry.js",
            payments: "payments@http://localhost:3004/remoteEntry.js"
          },
          shared: {
            react: { singleton: true, requiredVersion: false },
            "react-dom": { singleton: true, requiredVersion: false },
            "react-router-dom": { singleton: true, requiredVersion: false }
          }
        })
      );
      return config;
    }
  }
};
