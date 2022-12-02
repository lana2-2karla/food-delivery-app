const PlateSchema = (sequelize, DataTypes) => {
  const PlateTable = sequelize.define('Plates', {
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
      type: DataTypes.STRING,
      get () {
        return this.getDataValue('ingredients').split(',')
      }
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

  PlateTable.associate = (models) => {
    PlateTable.belongsTo(models.Shops, {
      foreignKey: 'shopId',
      onDelete: 'CASCADE'
    })
  }

  return PlateTable
}

module.exports = PlateSchema
