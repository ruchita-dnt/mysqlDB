import { ResourceStatusEnum } from "./Enum";
export declare class DocumentTypes {
    id: number;
    projectId: number;
    documentType: string;
    status: ResourceStatusEnum;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
