'use strict'

module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['domestic', 'traffic', 'recreation', 'diet', 'others']]
      }
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    merchant: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userId: DataTypes.INTEGER
  }, {})
  Record.associate = function (models) {
    // associations can be defined here
    Record.belongsTo(models.User)
  }
  return Record
}
