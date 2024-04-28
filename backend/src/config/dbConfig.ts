import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';




export const db= new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER}`,`${process.env.DB_PASS}`,{
  host: `${process.env.DB_HOST}`,
  dialect: 'mysql',
  logging: false,
});




export async function DBconnection() {
  try {
   
    await db.authenticate();
    console.log('Connection has been established successfully.');
    db.models.Document.hasMany(db.models.File, {
      foreignKey: 'documentId',
      as: 'files',
      onDelete: 'CASCADE',
    
     
    });
    db.models.File.belongsTo(db.models.Document, {
      foreignKey: 'documentId',
      as: 'document',
    });
    await db.sync();
  //connect models with associations and cascade delete
  
  
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}