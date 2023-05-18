"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const FileMaster_1 = require("./models/FileMaster");
const FileProcessDetails_1 = require("./models/FileProcessDetails");
const FileTypes_1 = require("./models/FileTypes");
const Operations_1 = require("./models/Operations");
const Projects_1 = require("./models/Projects");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "35.228.4.120",
    //   host: "0.0.0.0",
    port: 3306,
    username: "root",
    password: "Admin@123",
    database: "gedms",
    synchronize: true,
    logging: true,
    entities: [FileMaster_1.filemaster, FileProcessDetails_1.fileprocessdetails, FileTypes_1.filetypes, Operations_1.operations, Projects_1.projects],
    subscribers: [],
    migrations: [],
});
// console.log("this is datasource", DataSource, AppDataSource)
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
let getEntity = async (tableName) => {
    try {
        let entityData = exports.AppDataSource.getRepository(tableName);
        return entityData;
    }
    catch (error) {
        console.log("Connection to repository is failed");
        return error;
    }
};
let saveEntity = async (modelName, data) => {
    try {
        let saveRepository = await modelName.save(data);
        return saveRepository;
    }
    catch (error) {
        console.log("Save Entity failed");
        return error;
    }
};
let deleteEntity = async (modelName) => {
    try {
        let removedData = await modelName.remove();
        return removedData;
    }
    catch (error) {
        console.log("Debug Entity failed");
        return error;
    }
};
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