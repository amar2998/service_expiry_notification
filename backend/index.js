import db_object from "./src/db/db.config.js";
import './src/models/association.js';

try {
    await db_object.authenticate();
    // console.log("successful");
    await db_object.sync({force: true})
    
} catch (error) {
    // console.log(error);
    
}finally{
    db_object.close();
}