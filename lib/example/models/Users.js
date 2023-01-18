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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Companies_1 = __importDefault(require("./Companies"));
let Users = class Users extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({ autoIncrement: true }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.Unique(true),
    sequelize_typescript_1.Column({ defaultValue: sequelize_typescript_1.DataType.UUIDV4 }),
    __metadata("design:type", String)
], Users.prototype, "uuid", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Users.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.ENUM('MALE', 'FEMALE', 'UNDISCLOSED'),
    }),
    sequelize_typescript_1.Index({ name: 'gender_idx_key' }),
    __metadata("design:type", String)
], Users.prototype, "gender", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.CITEXT }),
    __metadata("design:type", String)
], Users.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.TEXT({ length: 'tiny' }) }),
    __metadata("design:type", String)
], Users.prototype, "biography", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER({ unsigned: true, zerofill: true }),
    }),
    __metadata("design:type", Number)
], Users.prototype, "age", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.BIGINT({ length: 2000, unsigned: true, zerofill: true }),
    }),
    __metadata("design:type", Number)
], Users.prototype, "ageInDays", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.FLOAT(5, 5) }),
    __metadata("design:type", Number)
], Users.prototype, "height", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.REAL(5, 5) }),
    __metadata("design:type", Number)
], Users.prototype, "pointInReal", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DOUBLE({ decimals: 11 }) }),
    __metadata("design:type", Number)
], Users.prototype, "pointInDouble", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DECIMAL(5, 5) }),
    __metadata("design:type", Number)
], Users.prototype, "pointInDecimal", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE(6) }),
    __metadata("design:type", Date)
], Users.prototype, "birthday", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.RANGE(sequelize_typescript_1.DataType.DATE)) }),
    __metadata("design:type", Array)
], Users.prototype, "texts", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.RANGE(sequelize_typescript_1.DataType.DATE) }),
    __metadata("design:type", Array)
], Users.prototype, "range", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.GEOMETRY }),
    __metadata("design:type", String)
], Users.prototype, "geometry", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.GEOGRAPHY }),
    __metadata("design:type", String)
], Users.prototype, "geography", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Companies_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Users.prototype, "companyId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Companies_1.default),
    __metadata("design:type", Companies_1.default)
], Users.prototype, "company", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.VIRTUAL }),
    __metadata("design:type", String)
], Users.prototype, "virtualValue", void 0);
Users = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'users',
        underscored: true,
    })
], Users);
exports.default = Users;
