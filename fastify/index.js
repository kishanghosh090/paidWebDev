// require("dotenv").config();
const path = require("path");
const fastify = require("fastify")({ logger: true });
const fastifyEnv = require("@fastify/env");

// regiser plugins
fastify.register(require("@fastify/cors"));
fastify.register(require("@fastify/sensible"));
fastify.register(require("@fastify/env"), {
  dotenv: true,
  schema: {
    type: "object",
    required: ["PORT", "MONGODB_URI", "JWT_TOKEN"],
    properties: {
      PORT: {
        type: "string",
        default: 3000,
      },
      MONGODB_URI: {
        type: "string",
        default: process.env.MONGODB_URI,
      },
      JWT_TOKEN: {
        type: "string",
        default: process.env.JWT_TOKEN,
      },
    },
  },
});

// register custom plugins
fastify.register(require("./plugins/mongodb"));
// test database connection
fastify.get("/test", async (request, reply) => {
  try {
    const mongoose = fastify.mongoose;
    const connectionState = mongoose.connection.readyState;
    let status = "";
    switch (connectionState) {
      case 0:
        status = "disconnected";
        break;
      case 1:
        status = "connected";
        break;
      case 2:
        status = "connecting";
        break;
      case 3:
        status = "disconnecting";
        break;
      default:
        status = "unknown";
        break;
    }
    reply.send({ status: status });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
});

fastify.get("/", async (request, reply) => {
  try {
    reply.send({ hello: "world" });
  } catch (error) {
    console.log(error);
  }
});

// const schema = {
//   type: "object",
//   required: ["PORT", "MONGODB_URI"],
//   properties: {
//     PORT: {
//       type: "string",
//       default: 3000,
//     },
//     MONGODB_URI: {
//       type: "string",
//       default: process.env.MONGODB_URI,
//     },
//   },
// };

// const options = {
//   confKey: "config", // optional, default: 'config'
//   schema: schema,
//   //   data: data, // optional, default: process.env
// };

// fastify.register(fastifyEnv, options).ready((err) => {
//   if (err) console.error(err);

//   console.log(fastify.config); // or fastify[options.confKey]
//   console.log(fastify.getEnvs());
//   // output: { PORT: 3000 }
// });

const start = async () => {
  try {
    // Run the server!
    await fastify.listen({ port: process.env.PORT });
    fastify.log.info(
      `server listening on http://localhost:${process.env.PORT}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
