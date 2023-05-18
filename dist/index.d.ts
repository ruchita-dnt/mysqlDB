export declare class Database {
    dbconnection: any;
    createDBconnection(): Promise<void>;
    getEntity(tableName: any): Promise<any>;
    saveEntity(modelName: any, data: object): Promise<any>;
    deleteEntity(modelName: any): Promise<any>;
}
