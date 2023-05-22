import { DataSource } from "typeorm";
import { Documents } from "./Documents";
import { DocumentAuditTrail } from "./DocumentAuditTrail";
import { DocumentTypes } from "./DocumentTypes";
import { Operations } from "./Operations";
import { Projects } from "./Projects";

export class Database {
  
  public dbconnection!: DataSource; 

  async createDBconnection() {
    this.dbconnection = new DataSource({
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
        Documents,
        DocumentTypes,
        DocumentAuditTrail,
        Operations,
        Projects,
      ],
      subscribers: [],
      migrations: [],
    });

    this.dbconnection
      .initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err:any) => {
        console.error("Error during Data Source initialization", err);
      });
  }
  async getEntity(tableName: any) {
    try {
      let entityData = this.dbconnection.getRepository(tableName);
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
