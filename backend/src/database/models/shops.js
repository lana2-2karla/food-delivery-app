const shopSchema = (sequelize, DataTypes) => {
  const shopTable = sequelize.define('Shop', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deliveryTime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deliveryValue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { timestamps: false })

  return shopTable
}

module.exports = shopSchema
