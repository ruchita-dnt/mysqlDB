"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const typeorm_1 = require("typeorm");
const FileMaster_1 = require("./FileMaster");
const FileProcessDetails_1 = require("./FileProcessDetails");
const FileTypes_1 = require("./FileTypes");
const Operations_1 = require("./Operations");
const Projects_1 = require("./Projects");
class Database {
    // console.log("this is datasource", DataSource, AppDataSource)
    async createDBconnection() {
        this.dbconnection = new typeorm_1.DataSource({
            type: "mysql",
            host: "35.228.4.120",
            //   host: "0.0.0.0",
            port: 3306,
            username: "root",
            password: "Admin@123",
            database: "gedms",
            synchronize: true,
            logging: true,
            entities: [
                FileMaster_1.filemaster,
                FileProcessDetails_1.fileprocessdetails,
                FileTypes_1.filetypes,
                Operations_1.operations,
                Projects_1.projects,
            ],
            subscribers: [],
            migrations: [],
        });
        this.dbconnection
            .initialize()
            .then(() => {
            console.log("Data Source has been initialized!");
        })
            .catch((err) => {
            console.error("Error during Data Source initialization", err);
        });
    }
    async getEntity(tableName) {
        try {
            let entityData = this.dbconnection.getRepository(tableName);
            return entityData;
        }
        catch (error) {
            console.log("Connection to repository is failed");
            return error;
        }
    }
    async saveEntity(modelName, data) {
        try {
            let saveRepository = await modelName.save(data);
            return saveRepository;
        }
        catch (error) {
            console.log("Save Entity failed");
            return error;
        }
    }
    async deleteEntity(modelName) {
        try {
            let removedData = await modelName.remove();
            return removedData;
        }
        catch (error) {
            console.log("Debug Entity failed");
            return error;
        }
    }
}
exports.Database = Database;
// let updateEntity = async(data: Object) =>{
//     try {
//       let updateRepository = await AppDataSource.findOne({data});
//       updateRepository.name = "Hello";
//       await updateRepository.save();
//     } catch (error) {
//       console.log("Update Entity failed");
//       return error;
//     }
//   }
//# sourceMappingURL=index.js.map