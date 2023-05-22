import { FileStatusEnum } from "./Enum";
export declare class file_master {
    id: number;
    operationId: number;
    projectId: number;
    fileTypeId: number;
    tailNo: string;
    flightNo: string;
    fileName: string;
    sourcePath: string;
    stagingAreaPath: string;
    startTime: Date;
    endTime: Date;
    fileStatusId: FileStatusEnum;
    createdAt: Date;
    updatedAt: Date;
}
