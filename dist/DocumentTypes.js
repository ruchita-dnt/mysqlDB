"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTypes = void 0;
const typeorm_1 = require("typeorm");
const Enum_1 = require("./Enum");
let DocumentTypes = class DocumentTypes {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DocumentTypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Number)
], DocumentTypes.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 45 }),
    __metadata("design:type", String)
], DocumentTypes.prototype, "documentType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Enum_1.ResourceStatusEnum }),
    __metadata("design:type", String)
], DocumentTypes.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], DocumentTypes.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], DocumentTypes.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { nullable: true }),
    __metadata("design:type", Date)
], DocumentTypes.prototype, "deletedAt", void 0);
DocumentTypes = __decorate([
    (0, typeorm_1.Entity)("DocumentTypes")
], DocumentTypes);
exports.DocumentTypes = DocumentTypes;
//# sourceMappingURL=DocumentTypes.js.map