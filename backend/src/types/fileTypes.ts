import { Optional } from "sequelize";
export interface IFileAttributes {
    id:string;
    name: string;
    documentId:string
    size: number;
    type: string;
    createdAt?: Date;
    updatedAt?: Date;
}


export interface IFileInput extends Optional<IFileAttributes, 'id' > {}
