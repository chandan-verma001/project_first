import { Sequelize,DataTypes } from "sequelize";
import { practice } from "../model/practice.model.js";
import { register } from "../model/userdata.js"
import {product} from "../model/product.model.js"


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
  db.register = register(sequelize,DataTypes)
  // db.register.sync({force:true})
  db.practice=practice(sequelize,DataTypes)
  // db.practice.sync({force:true})
  db.product=product(sequelize,DataTypes)
  // db.product.sync({force:true})

  export default db