"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const typeorm_1 = require("typeorm");
const Documents_1 = require("./Documents");
const DocumentAuditTrail_1 = require("./DocumentAuditTrail");
const DocumentTypes_1 = require("./DocumentTypes");
const Operations_1 = require("./Operations");
const Projects_1 = require("./Projects");
class Database {
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
            logging: false,
            entities: [
                Documents_1.Documents,
                DocumentTypes_1.DocumentTypes,
                DocumentAuditTrail_1.DocumentAuditTrail,
                Operations_1.Operations,
                Projects_1.Projects,
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
const db = new Database();
db.createDBconnection();
// let updateEntity = async(data: Object) =>{
//     try {
//       let updateRepository = await this.dbconnection.getRepository(data).findOneBy({
//       id:1
//       });
//       updateRepository.name = "Hello";
//       await updateRepository.save();
//     } catch (error) {
//       console.log("Update Entity failed");
//       return error;
//     }
//   }
//# sourceMappingURL=index.js.map