const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');

const Comment = db.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  contenu: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  timestamps: true,
  createdAt: 'created',
  updatedAt: false
});

module.exports = Comment;