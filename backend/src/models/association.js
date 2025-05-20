import Service from "./service.model.js";
import User from "./user.model.js";

User.hasMany(Service, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})
Service.belongsTo(User, {
    foreignKey: "user_id"
})