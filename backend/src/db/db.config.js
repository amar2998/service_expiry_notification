import { Sequelize } from "sequelize";

const db_object = new Sequelize("service_expiry", "root", "1111",{
    host: "localhost",
    dialect: "mysql"
});

export default db_object;