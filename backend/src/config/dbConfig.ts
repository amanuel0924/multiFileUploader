import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';


export const db= new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER}`,`${process.env.DB_PASS}`,{
  host: `${process.env.DB_HOST}`,
  dialect: 'mysql',
  logging: false,
  port:Number(process.env.DB_Port)
});




export async function DBconnection() {
  try {
    await db.authenticate();

    db.models.Document.hasMany(db.models.File, {
      foreignKey: 'documentId',
      as: 'files',
      onDelete: 'CASCADE',
    });
    db.models.File.belongsTo(db.models.Document, {
      foreignKey: 'documentId',
      as: 'document',
    });
    try {
      await db.sync();
      console.log('Database connected');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}