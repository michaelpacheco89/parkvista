module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlphanumeric: true,
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // isAlphanumeric: true,
          len: [1]
        }
      },
    isAdmin:{
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
    });

  // User.associate = function(models){
    // ADD ASSOCIATIONS HERE
  // };
  return User;
};
