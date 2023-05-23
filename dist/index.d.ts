import { DataSource } from "typeorm";
export declare class Database {
    private AppDataSource;
    createDBconnection(): Promise<DataSource>;
    getEntity(tableName: any): Promise<unknown>;
    saveEntity(modelName: any, data: object): Promise<any>;
    deleteEntity(modelName: any): Promise<any>;
}
