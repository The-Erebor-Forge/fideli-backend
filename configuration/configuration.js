require("dotenv").config();

function loadEnvironmentVariable(keyname) {
  const envVar = process.env[keyname];

  if (!envVar) {
    throw new Error(`Configuration must include ${keyname}`);
  }

  return envVar;
}

module.exports = {
  serverHost: loadEnvironmentVariable("SERVER_HOST"),
  serverPort: loadEnvironmentVariable("SERVER_PORT"),
  serverJwtSecret: loadEnvironmentVariable("SERVER_JWT_SECRET"),
  serverCryptoKey: loadEnvironmentVariable("SERVER_CRYPTO_KEY"),
  debugMode: loadEnvironmentVariable("DEBUG_MODE"),
};
