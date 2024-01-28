import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const studentmodel = sequelize.define(
  "NewStudent",
  {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      
  },
  {}
);

export default studentmodel;