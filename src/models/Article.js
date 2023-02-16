const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Comment = require('./Comment')

const Article = db.define('Article', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'updated'
    }
);

Article.hasMany(Comment, {
    foreignKey: {
        allowNull: false,
        name: 'articleId'
    },
    sourceKey:'id'
})

module.exports = Article;