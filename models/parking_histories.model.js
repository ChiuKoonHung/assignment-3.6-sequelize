const { DataTypes, Model } = require("sequelize");

module.exports = function (sequelize) {
  class Parking_histories extends Model {}

  Parking_histories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vehicleId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "vehicle_id",
      },
      slotNo: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "slot_no",
      },
      carParkId:{
          type:DataTypes.INTEGER,
          allowNull:true,
          field:"car_park_id"
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
      modelName: "Parking_histories",
      tableName: "parking_histories",
    }
  );

  return Parking_histories;
};
