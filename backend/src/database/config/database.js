require('dotenv').config()

module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'food-delivery',
  define: {
    timestamp: true,
    // todas as tabelas com letra maiuscula
    underscored: true
  }
}
