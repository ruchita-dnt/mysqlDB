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
exports.file_process_details = void 0;
const typeorm_1 = require("typeorm");
const Enum_1 = require("./Enum");
let file_process_details = class file_process_details {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], file_process_details.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    __metadata("design:type", Number)
], file_process_details.prototype, "fileId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Enum_1.FileStatusEnum }),
    __metadata("design:type", String)
], file_process_details.prototype, "fileStatusId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], file_process_details.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime"),
    __metadata("design:type", Date)
], file_process_details.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime"),
    __metadata("design:type", Date)
], file_process_details.prototype, "createdAt", void 0);
file_process_details = __decorate([
    (0, typeorm_1.Entity)("file_process_details")
], file_process_details);
exports.file_process_details = file_process_details;
//# sourceMappingURL=FileProcessDetails.js.map