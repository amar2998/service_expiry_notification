import { DataTypes } from "sequelize";
import db_object from "../db/db.config.js";

const User = db_object.define(
    "User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

export default User;