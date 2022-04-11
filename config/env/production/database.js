module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-44-194-4-127.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'd9juc8fm2rggo3'),
        username: env('DATABASE_USERNAME', 'amhmbcapcmcjqo'),
        password: env('DATABASE_PASSWORD', 'bdc26bb10cd9f7079b6819d65fbbaa81436a4af6a77829e7e8225379fbfc18a0'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
