const dotEnv = require('dotenv');

const env = process.env.NODE_ENV || 'production'; 
const configFile = env === 'production' ? './.env' : `./.env.${env}`;

dotEnv.config({ path: configFile });

console.log('Config File:', configFile);
console.log('DB_URL:', process.env.MONGODB_URI);

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
