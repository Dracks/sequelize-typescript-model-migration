"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("./sequelize"));
const index_1 = require("../index");
const path_1 = __importDefault(require("path"));
index_1.generateMigration(sequelize_1.default, {
    migrationName: "my-migration",
    outDir: path_1.default.join(__dirname, "./migrations"),
    snapshotDir: path_1.default.join(__dirname, "./snapshots"),
});
