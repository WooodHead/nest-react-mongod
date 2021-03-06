import { Reducer } from 'redux';
export interface ParamsState {
    sort: string;
    order: string;
    page: number;
    perPage: number;
    filter: any;
}
declare const paramsReducer: Reducer<ParamsState>;
export default paramsReducer;
