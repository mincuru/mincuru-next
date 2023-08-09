module.exports = {
  "api-file": {
    input: "./public/swagger.json",
    output: {
      mode: "tags-split",
      target: "api-client/api.ts",
      schemas: "api-client/model",
      client: "swr",
      mock: true,
    },
  },
};
