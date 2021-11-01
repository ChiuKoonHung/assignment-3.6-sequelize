// Import sequelize
const { Sequelize } = require("sequelize");

// DB Connection Configuration
const sequelize = new Sequelize("lesson_db", "postgres", "justinchiu123", {
  host: "localhost",
  dialect: "postgres",
});

// Test connection function
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
}

// Import model(s)
const Vehicle = require("./vehicle.model")(sequelize);
const Driver = require("./driver.model")(sequelize);
const Parking_histories = require("./parking_histories.model")(sequelize);
const Car_park = require("./car_park.model")(sequelize);

// Create associations
Vehicle.belongsTo(Driver, {
    foreignKey:"driverId"
});
Parking_histories.belongsTo(Vehicle, {
    foreignKey:"vehicleId"
});
Vehicle.hasMany(Parking_histories, {
    foreignKey:"vehicleId"
});
Parking_histories.belongsTo(Car_park, {
    foreignKey:"carParkId"
});
Car_park.hasMany(Parking_histories, {
    foreignKey:"carParkId"
});

// Exports (remember enhanced object literal)
module.exports = {
  sequelize,
  testConnection,
  Vehicle,
  Driver,
  Parking_histories,
  Car_park,
};
