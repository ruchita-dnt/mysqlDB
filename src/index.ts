import { DataSource } from "typeorm";
import { Documents } from "./Documents";
import { DocumentAuditTrail } from "./DocumentAuditTrail";
import { DocumentTypes } from "./DocumentTypes";
import { Operations } from "./Operations";
import { Projects } from "./Projects";

export class Database {
  private AppDataSource = new DataSource({
    type: "mysql",
    host: "35.228.4.120",
    port: 3306,
    username: "root",
    password: "Admin@123",
    database: "gedms",
    synchronize: false,
    logging: false,
    entities: [
      Documents,
      DocumentTypes,
      DocumentAuditTrail,
      Operations,
      Projects,
    ],
    subscribers: [],
    migrations: [],
    connectTimeout: 600000,
  });

  async createDBconnection(): Promise<DataSource> {
    const isInitialized = this.AppDataSource.isInitialized;
    if (isInitialized === false) {
      return this.AppDataSource.initialize()
        .then((): any => {
          console.log("Data Source has been initialized! b");
          return this.AppDataSource;
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
    console.log("Data Source has been initialized! a");
    return this.AppDataSource;
  }
  async getEntity(tableName: any) {
    try {
      let entityData = this.AppDataSource.getRepository(tableName);
      return entityData;
    } catch (error) {
      console.log("Connection to repository is failed");
      return error;
    }
  }

  async saveEntity(modelName: any, data: object) {
    try {
      let saveRepository = await modelName.save(data);

      return saveRepository;
    } catch (error) {
      console.log("Save Entity failed");

      return error;
    }
  }

  async deleteEntity(modelName: any) {
    try {
      let removedData = await modelName.remove();
      return removedData;
    } catch (error) {
      console.log("Debug Entity failed");
      return error;
    }
  }
}

// const db = new Database();
// db.createDBconnection();

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
