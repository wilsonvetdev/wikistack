const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/wikistack')

const Page = db.define('page', {
  title: {type: Sequelize.STRING, allowNull: false},
  slug: {type: Sequelize.STRING, allowNull: false},
  content: {type: Sequelize.TEXT, allowNull: false},
  status: {type: Sequelize.ENUM('open', 'closed')}
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      unique: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      unique: true
    }
  }
})

module.exports = {
  db,
  Page,
  User
}
