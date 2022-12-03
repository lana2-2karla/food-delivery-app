const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { timestamps: false, tableName: 'Users' })

  return UserTable
}

module.exports = UserSchema
