const fp = require("fastify-plugin");
const configuration = require("../configuration/configuration");

module.exports = fp(function (fastify, opts, done) {
  fastify.register(require("@fastify/jwt"), {
    secret: configuration.serverJwtSecret,
  });

  fastify.decorate("authenticate", async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (error) {
      reply.send(error);
    }
  });

  done();
});
