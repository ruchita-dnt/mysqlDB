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
exports.file_master = void 0;
const typeorm_1 = require("typeorm");
const Enum_1 = require("./Enum");
let file_master = class file_master {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], file_master.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Number)
], file_master.prototype, "operationId", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Number)
], file_master.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Number)
], file_master.prototype, "fileTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 45 }),
    __metadata("design:type", String)
], file_master.prototype, "tailNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 45 }),
    __metadata("design:type", String)
], file_master.prototype, "flightNo", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 60 }),
    __metadata("design:type", String)
], file_master.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100 }),
    __metadata("design:type", String)
], file_master.prototype, "sourcePath", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 255 }),
    __metadata("design:type", String)
], file_master.prototype, "stagingAreaPath", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime"),
    __metadata("design:type", Date)
], file_master.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime"),
    __metadata("design:type", Date)
], file_master.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Enum_1.FileStatusEnum }),
    __metadata("design:type", String)
], file_master.prototype, "fileStatusId", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime"),
    __metadata("design:type", Date)
], file_master.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime"),
    __metadata("design:type", Date)
], file_master.prototype, "updatedAt", void 0);
file_master = __decorate([
    (0, typeorm_1.Entity)("file_master")
], file_master);
exports.file_master = file_master;
//# sourceMappingURL=FileMaster.js.map