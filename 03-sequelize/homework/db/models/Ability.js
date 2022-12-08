const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "name_mana_cost",
    },
    description: {
      type: DataTypes.TEXT,
    },
    mana_cost:{
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: "name_mana_cost",
    }
  })
}

/* Ability
name*: string
description: text
mana_cost*: float
La combinación "name" + "mana_cost" debe ser única. */