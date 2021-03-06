var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { useInput, useTranslate, FieldTitle } from 'ra-core';
import sanitizeRestProps from './sanitizeRestProps';
import InputHelperText from './InputHelperText';
var useStyles = makeStyles(function (theme) { return ({
    input: { width: theme.spacing(16) },
}); }, { name: 'RaNullableBooleanInput' });
var getBooleanFromString = function (value) {
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    return null;
};
var getStringFromBoolean = function (value) {
    if (value === true)
        return 'true';
    if (value === false)
        return 'false';
    return '';
};
var NullableBooleanInput = function (props) {
    var className = props.className, classesOverride = props.classes, _a = props.format, format = _a === void 0 ? getStringFromBoolean : _a, helperText = props.helperText, label = props.label, _b = props.margin, margin = _b === void 0 ? 'dense' : _b, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, options = props.options, _c = props.parse, parse = _c === void 0 ? getBooleanFromString : _c, resource = props.resource, source = props.source, validate = props.validate, _d = props.variant, variant = _d === void 0 ? 'filled' : _d, _e = props.nullLabel, nullLabel = _e === void 0 ? 'ra.boolean.null' : _e, _f = props.falseLabel, falseLabel = _f === void 0 ? 'ra.boolean.false' : _f, _g = props.trueLabel, trueLabel = _g === void 0 ? 'ra.boolean.true' : _g, rest = __rest(props, ["className", "classes", "format", "helperText", "label", "margin", "onBlur", "onChange", "onFocus", "options", "parse", "resource", "source", "validate", "variant", "nullLabel", "falseLabel", "trueLabel"]);
    var classes = useStyles(props);
    var translate = useTranslate();
    var _h = useInput({
        format: format,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        parse: parse,
        resource: resource,
        source: source,
        validate: validate,
    }), id = _h.id, input = _h.input, isRequired = _h.isRequired, _j = _h.meta, error = _j.error, touched = _j.touched;
    return (React.createElement(TextField, __assign({ id: id }, input, { select: true, margin: margin, label: React.createElement(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), error: !!(touched && error), helperText: React.createElement(InputHelperText, { touched: touched, error: error, helperText: helperText }), className: classnames(classes.input, className), variant: variant }, options, sanitizeRestProps(rest)),
        React.createElement(MenuItem, { value: "" }, translate(nullLabel)),
        React.createElement(MenuItem, { value: "false" }, translate(falseLabel)),
        React.createElement(MenuItem, { value: "true" }, translate(trueLabel))));
};
NullableBooleanInput.propTypes = {
    label: PropTypes.string,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    nullLabel: PropTypes.string,
    falseLabel: PropTypes.string,
    trueLabel: PropTypes.string,
};
export default NullableBooleanInput;
