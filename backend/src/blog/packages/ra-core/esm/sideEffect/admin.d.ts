import { DataProvider, AuthProvider } from '../types';
declare const _default: (dataProvider: DataProvider, authProvider: AuthProvider | null) => () => Generator<import("redux-saga/effects").AllEffect<any>, void, unknown>;
/**
 * @param {Object} dataProvider A Data Provider function
 * @param {Function} authProvider An Authentication Provider object
 */
export default _default;
