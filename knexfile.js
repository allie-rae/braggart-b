module.exports = {
  development: {
    connection: "postgres://localhost/braggart",
    client: "pg",
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
