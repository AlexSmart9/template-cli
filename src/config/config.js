require('pg')
require('pg-hstore')
require('dotenv').config();

module.exports = {
  "development": {
    use_env_variable: "DATABASE_URL",
  },
  "test": {
    use_env_variable: "DATABASE_URL",
  },
  "production": {
    use_env_variable: "DATABASE_URL_PRODUCTION",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
}
}