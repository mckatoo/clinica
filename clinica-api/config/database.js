module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '10.201.84.200'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'clinica'),
        username: env('DATABASE_USERNAME', 'clinica'),
        password: env('DATABASE_PASSWORD', 'uniesi*clinica'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
