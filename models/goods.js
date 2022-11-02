const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("cake", "root", "12345678", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

// CREATE DATABASE cake;
class Goods extends Model{}
// // 定义数据模型
// const Goods = sequelize.define("Goods", {
//   count: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     defaultValue: 1,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: "",
//   },
// });

Goods.init(
  {
    name: DataTypes.STRING,
    create_time: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "goods",
  }
);
(async () => {
  // await Goods.sync()
  await sequelize.sync();
  const cake1 = await Goods.create({
    name: "cake1",
    create_time: new Date(),
  });
  console.log("cake1.toJSON() :>> ", cake1.toJSON());
})();
