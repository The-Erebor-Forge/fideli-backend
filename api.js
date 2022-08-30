"use strict";

const fastify = require("fastify");

const jwtHandler = require("./plugins/jwt");
const { serverPublicRoutes, serverPrivateRoutes } = require("./routes/routes");
const fastifyPrismaClient = require("fastify-prisma-client");

const build = (options = {}) => {
  const api = fastify(options);

  api.register(jwtHandler);
  api.register(fastifyPrismaClient);

  api.register(serverPublicRoutes);
  api.register(serverPrivateRoutes);

  return api;
};

module.exports = { build };
