import { History } from 'history';
import { AuthProvider, DataProvider, I18nProvider, InitialState } from '../types';
interface Params {
    dataProvider: DataProvider;
    history: History;
    authProvider?: AuthProvider;
    customReducers?: any;
    customSagas?: any[];
    i18nProvider?: I18nProvider;
    initialState?: InitialState;
    locale?: string;
}
declare const _default: ({ dataProvider, history, customReducers, authProvider, customSagas, initialState, }: Params) => import("redux").Store<any, any>;
export default _default;
