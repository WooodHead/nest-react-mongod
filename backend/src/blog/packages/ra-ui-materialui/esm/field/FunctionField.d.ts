import { FC } from 'react';
import { Record } from 'ra-core';
import { TypographyProps } from '@material-ui/core/Typography';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * Field using a render function
 *
 * @example
 * <FunctionField
 *     source="last_name" // used for sorting
 *     label="Name"
 *     render={record => record && `${record.first_name} ${record.last_name}`}
 * />
 */
declare const FunctionField: FC<FunctionFieldProps>;
export interface FunctionFieldProps<RecordType extends Record = Record> extends PublicFieldProps, InjectedFieldProps<RecordType>, TypographyProps {
    render: (record?: RecordType, source?: string) => any;
}
export default FunctionField;
