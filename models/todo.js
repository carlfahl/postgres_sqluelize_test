'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Todo.hasMany(models.TodoItem, {
          foreignKey: 'todoId',
          as: 'todoItems',
        });
      }
    }
  });
  return Todo;
};
