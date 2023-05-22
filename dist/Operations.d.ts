import { ResourceStatusEnum } from "./Enum";
export declare class operations {
    id: number;
    operationName: string;
    operationCode: string;
    status: ResourceStatusEnum;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
