import { ResourceStatusEnum } from "./Enum";
export declare class Projects {
    id: number;
    name: string;
    description: string;
    status: ResourceStatusEnum;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
