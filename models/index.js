const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/wikistack')

const Page = db.define('page', {
  title: {type: Sequelize.STRING},
  slug: {type: Sequelize.STRING},
  content: {type: Sequelize.TEXT},
  status: {type: Sequelize.ENUM('open', 'closed')}
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
      unique: true
    }
  },
  email: {
    type: Sequelize.STRING,
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
