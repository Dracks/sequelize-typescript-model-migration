import { Model } from 'sequelize-typescript';
declare class Companies extends Model {
    id: number;
    uuid: string;
    name: string;
    isDeleted: boolean;
}
export default Companies;
