import { FC, ElementType } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { PublicFieldProps, InjectedFieldProps } from './types';
declare const TextField: FC<TextFieldProps>;
export interface TextFieldProps extends PublicFieldProps, InjectedFieldProps, TypographyProps {
    component?: ElementType<any>;
}
export default TextField;
