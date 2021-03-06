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
import { useState } from 'react';
import { useTranslate } from 'ra-core';
import { InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextInput from './TextInput';
var PasswordInput = function (_a) {
    var _b = _a.initiallyVisible, initiallyVisible = _b === void 0 ? false : _b, props = __rest(_a, ["initiallyVisible"]);
    var _c = useState(initiallyVisible), visible = _c[0], setVisible = _c[1];
    var translate = useTranslate();
    var handleClick = function () {
        setVisible(!visible);
    };
    return (React.createElement(TextInput, __assign({}, props, { type: visible ? 'text' : 'password', InputProps: {
            endAdornment: (React.createElement(InputAdornment, { position: "end" },
                React.createElement(IconButton, { "aria-label": translate(visible
                        ? 'ra.input.password.toggle_visible'
                        : 'ra.input.password.toggle_hidden'), onClick: handleClick }, visible ? React.createElement(Visibility, null) : React.createElement(VisibilityOff, null)))),
        } })));
};
export default PasswordInput;
