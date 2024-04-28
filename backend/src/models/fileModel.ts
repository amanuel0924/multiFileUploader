import { Model,DataTypes, Association } from "sequelize";
import { db } from "../config/dbConfig";
import Document from "./documentModel";
import { IFileAttributes, IFileInput } from "../types/fileTypes";



export class File extends Model<IFileInput> implements IFileAttributes {
    public id!:string
    public documentId!:string
    public name!: string
    public type!: string
    public size!: number
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  
  }

File.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        documentId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Document,
                key: 'id',
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
    sequelize: db,
    modelName: 'File',
    tableName: 'files',
    timestamps: true,
    
});







