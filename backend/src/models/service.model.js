import { DataTypes } from "sequelize";
import db_object from "../db/db.config.js";

const Service = db_object.define(
    "Service",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        validity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

export default Service;