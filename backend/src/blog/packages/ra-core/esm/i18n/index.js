import translate from './translate';
import { TranslationContext } from './TranslationContext';
import TranslationProvider from './TranslationProvider';
import TestTranslationProvider from './TestTranslationProvider';
import useLocale from './useLocale';
import useSetLocale from './useSetLocale';
import useTranslate from './useTranslate';
// Alias to translate to avoid shadowed variable names error with tslint
var withTranslate = translate;
export { translate, // deprecated
withTranslate, // deprecated
TranslationContext, TranslationProvider, TestTranslationProvider, useLocale, useSetLocale, useTranslate, };
export var DEFAULT_LOCALE = 'en';
export * from './TranslationUtils';
export * from './TranslationContext';
export * from './TranslationMessages';
