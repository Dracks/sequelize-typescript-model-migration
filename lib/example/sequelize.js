"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSequelizeConnection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_json_1 = __importDefault(require("./config/config.json"));
const path_1 = __importDefault(require("path"));
const config = config_json_1.default['development'];
const createSequelizeConnection = (models) => {
    return new sequelize_typescript_1.Sequelize(config.database || '', config.username || '', config.password || '', {
        dialect: 'postgres',
        port: 5432,
        database: config.database,
        host: config.host || '',
        pool: {
            max: 20,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        logging: true,
        models: [path_1.default.join(__dirname, '/models')]
    });
};
exports.createSequelizeConnection = createSequelizeConnection;
exports.default = exports.createSequelizeConnection();
