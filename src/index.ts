import { DataSource } from "typeorm";
import { filemaster } from "./models/FileMaster";
import { fileprocessdetails } from "./models/FileProcessDetails";
import { filetypes } from "./models/FileTypes";
import { operations } from "./models/Operations";
import { projects } from "./models/Projects";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "35.228.4.120",
  //   host: "0.0.0.0",
  port: 3306,
  username: "root",
  password: "Admin@123",
  database: "gedms",
  synchronize: true,
  logging: true,
  entities: [filemaster, fileprocessdetails, filetypes, operations, projects],
  subscribers: [],
  migrations: [],
});
// console.log("this is datasource", DataSource, AppDataSource)
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

let getEntity = async (tableName: any) => {
  try {
    let entityData = AppDataSource.getRepository(tableName);
    return entityData;
  } catch (error) {
    console.log("Connection to repository is failed");
    return error;
  }
};

let saveEntity = async (modelName: any, data: object) => {
  try {
    let saveRepository = await modelName.save(data);

    return saveRepository;
  } catch (error) {
    console.log("Save Entity failed");

    return error;
  }
};

let deleteEntity = async (modelName: any) => {
  try {
    let removedData = await modelName.remove();
    return removedData;
  } catch (error) {
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