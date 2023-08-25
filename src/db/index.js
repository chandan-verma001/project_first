import { Sequelize,DataTypes } from "sequelize";
import { userdata } from "../model/userdata.js";
import { superform } from "../model/superform.model.js"


const sequelize = new Sequelize('email', 'root', '@Dmin#2004', {
    host: 'localhost',
    dialect:"mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  (async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  })()
  
  let db = {}
  db.userdata=userdata(sequelize,DataTypes)
  // db.userdata.sync({force:true})
  db.superform = superform(sequelize,DataTypes)
  // db.superform.sync({force:true})

  export default db