import { FileStatusEnum } from "./Enum";
export declare class DocumentAuditTrail {
    id: number;
    documentId: number;
    status: FileStatusEnum;
    description: string;
    time: Date;
    createdAt: Date;
}
