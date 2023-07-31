module.exports = {
  apps: [
    {
      name: 'acuantia-usa-back', // Your project name
      script: 'yarn', // For this example we're using npm, could also be yarn
      args: 'start', // Script to start the Strapi server,
      env: {
        APP_KEYS: 'efH6+LY3sFEVO7C6LIfjnQ==,PctHBXtEg3TOuCFY+ARu/w==,mjxj1zxDy6YMyGZmB28VfA==,+6+Yve1paynaT+qKcpl25w==', // you can find it in your project .env file.
        API_TOKEN_SALT: 'WCKfjqzkNBu+tYIr0HllWg==',
        ADMIN_JWT_SECRET: 'WtlLO6LuJ/uQSV6aOfA4jA==',
        NODE_ENV: 'production',
        DATABASE_HOST: 'rds-sitios.cgq6twvp4xtn.us-east-1.rds.amazonaws.com', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '3306',
        DATABASE_NAME: 'acuantia', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'acuantia', // default username
        DATABASE_PASSWORD: '&6NAs5z?Ti89icHlPlFu',
      },
    },
  ],
};
