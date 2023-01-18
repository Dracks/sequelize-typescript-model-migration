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
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
let Companies = class Companies extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({ autoIncrement: true }),
    __metadata("design:type", Number)
], Companies.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.Unique(true),
    sequelize_typescript_1.Column({ defaultValue: sequelize_typescript_1.DataType.UUIDV4 }),
    __metadata("design:type", String)
], Companies.prototype, "uuid", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Companies.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ defaultValue: false }),
    __metadata("design:type", Boolean)
], Companies.prototype, "isDeleted", void 0);
Companies = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'companies',
        underscored: true,
        indexes: [
            {
                unique: true,
                fields: ['name', 'is_deleted'],
                where: {
                    name: { [sequelize_1.Op.in]: ['name1', 'name2'] },
                    is_deleted: { [sequelize_1.Op.eq]: true },
                },
            },
        ],
    })
], Companies);
exports.default = Companies;
