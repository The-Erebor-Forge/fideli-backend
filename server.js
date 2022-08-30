const { build } = require("./api");
const configuration = require("./configuration/configuration");

const api = build({ logger: configuration.debugMode });

const init = async () => {
  await api.listen(
    { port: configuration.serverPort, host: configuration.serverHost },
    (error, address) => {
      if (error) {
        app.log.error(error);
        process.exit(1);
      }
    }
  );
};

init();
