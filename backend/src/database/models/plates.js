const plateSchema = (sequelize, DataTypes) => {
  const plateTable = sequelize.define('Plate', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ingredients: {
      allowNull: false,
      type: DataTypes.JSON
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING
    },
    urlImage: {
      allowNull: false,
      type: DataTypes.STRING
    },
    shopId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { timestamps: false })

  plateTable.associate = (models) => {
    plateTable.belongsTo(models.Shops, {
      foreignKey: 'shopId',
      onDelete: 'CASCADE'
    })
  }

  return plateTable
}

module.exports = plateSchema
