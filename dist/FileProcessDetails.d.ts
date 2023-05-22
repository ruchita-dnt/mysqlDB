import { FileStatusEnum } from "./Enum";
export declare class file_process_details {
    id: number;
    fileId: number;
    fileStatusId: FileStatusEnum;
    description: string;
    time: Date;
    createdAt: Date;
}
