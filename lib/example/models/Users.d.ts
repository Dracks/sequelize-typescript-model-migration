import { Model } from 'sequelize-typescript';
import Companies from './Companies';
declare class Users extends Model {
    id: number;
    uuid: string;
    name: string;
    lastName: string;
    gender: string;
    description: string;
    biography: string;
    age: number;
    ageInDays: number;
    height: number;
    pointInReal: number;
    pointInDouble: number;
    pointInDecimal: number;
    birthday: Date;
    texts: string[];
    range: string[];
    geometry: string;
    geography: string;
    companyId: number;
    company: Companies;
    virtualValue: string;
}
export default Users;
