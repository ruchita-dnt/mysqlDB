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
exports.projects = void 0;
const typeorm_1 = require("typeorm");
const Enum_1 = require("./Enum");
let projects = class projects {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], projects.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 45 }),
    __metadata("design:type", String)
], projects.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], projects.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Enum_1.ResourceStatusEnum }),
    __metadata("design:type", String)
], projects.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime"),
    __metadata("design:type", Date)
], projects.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime"),
    __metadata("design:type", Date)
], projects.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { nullable: true }),
    __metadata("design:type", Date)
], projects.prototype, "deletedAt", void 0);
projects = __decorate([
    (0, typeorm_1.Entity)('projects')
], projects);
exports.projects = projects;
//# sourceMappingURL=Projects.js.map