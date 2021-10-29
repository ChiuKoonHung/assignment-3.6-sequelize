const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Car_park extends Model {}

  Car_park.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "address",
      },
      noOfSlots: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "no_of_slots",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "Car_park",
      tableName: "car_park",
    }
  );

  return Car_park;
};
