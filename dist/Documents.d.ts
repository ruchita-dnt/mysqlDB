import { FileStatusEnum } from "./Enum";
export declare class Documents {
    id: number;
    operationId: number;
    projectId: number;
    documentTypeId: number;
    tailNo: string;
    flightNo: string;
    documentName: string;
    sourcePath: string;
    stagingAreaPath: string;
    status: FileStatusEnum;
    processStartTime: Date;
    processEndTime: Date;
    createdAt: Date;
    updatedAt: Date;
}
