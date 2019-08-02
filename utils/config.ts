const dotenv = require('dotenv');

function appConfig(key, fallback) {
  dotenv.config();
  return process.env[key] || fallback;
}

module.exports.appConfig = appConfig;