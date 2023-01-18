import { Model } from 'sequelize-typescript';
declare class City extends Model {
    id: number;
    cityName: string;
    countryName: string;
    code: string;
}
export default City;
