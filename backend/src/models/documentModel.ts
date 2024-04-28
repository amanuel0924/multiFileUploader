import { Model, DataTypes,Association } from 'sequelize';
import { db } from "../config/dbConfig";
import {File} from "./fileModel";
import { DocumentAttributes } from '../types/docment types';






export class Document extends Model<DocumentAttributes> {
  
    public id!: string;
    public description!: string;
    public files?: File[];

   
  
}

Document.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize:db, modelName: 'Document',timestamps: true, tableName: 'documents' });




export default Document;