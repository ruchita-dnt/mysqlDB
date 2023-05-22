import { DataSource } from "typeorm";
export declare class Database {
    dbconnection: DataSource;
    createDBconnection(): Promise<void>;
    getEntity(tableName: any): Promise<unknown>;
    saveEntity(modelName: any, data: object): Promise<any>;
    deleteEntity(modelName: any): Promise<any>;
}
