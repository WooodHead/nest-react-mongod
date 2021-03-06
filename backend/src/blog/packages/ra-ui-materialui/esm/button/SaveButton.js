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
import React, { useContext, cloneElement, } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import ContentSave from '@material-ui/icons/Save';
import classnames from 'classnames';
import { useTranslate, useNotify, SideEffectContext, FormContext, } from 'ra-core';
import { sanitizeButtonRestProps } from './Button';
/**
 * Submit button for resource forms (Edit and Create).
 *
 * @typedef {Object} Props the props you can use (other props are injected by the <Toolbar>)
 * @prop {string} className
 * @prop {string} label Button label. Defaults to 'ra.action.save', translated.
 * @prop {boolean} disabled Disable the button.
 * @prop {string} variant Material-ui variant for the button. Defaults to 'contained'.
 * @prop {ReactElement} icon
 * @prop {string|boolean} redirect Override of the default redirect in case of success. Can be 'list', 'show', 'edit' (for create views), or false (to stay on the creation form).
 * @prop {function} onSave (deprecated)
 * @prop {function} onSuccess Callback to execute instead of the default success side effects. Receives the dataProvider response as argument.
 * @prop {function} onFailure Callback to execute instead of the default error side effects. Receives the dataProvider error response as argument.
 * @prop {function} transform Callback to execute before calling the dataProvider. Receives the data from the form, must return that transformed data. Can be asynchronous (and return a Promise)
 *
 * @param {Prop} props
 *
 * @example // with custom redirection
 *
 * <SaveButton label="post.action.save_and_edit" redirect="edit" />
 *
 * @example // with no redirection
 *
 * <SaveButton label="post.action.save_and_add" redirect={false} />
 *
 * @example // with custom success side effect
 *
 * const MySaveButton = props => {
 *     const notify = useNotify();
 *     const redirect = useRedirect();
 *     const onSuccess = (response) => {
 *         notify(`Post "${response.data.title}" saved!`);
 *         redirect('/posts');
 *     };
 *     return <SaveButton {...props} onSuccess={onSuccess} />;
 * }
 */
var SaveButton = function (props) {
    var className = props.className, classesOverride = props.classes, invalid = props.invalid, _a = props.label, label = _a === void 0 ? 'ra.action.save' : _a, disabled = props.disabled, redirect = props.redirect, saving = props.saving, submitOnEnter = props.submitOnEnter, _b = props.variant, variant = _b === void 0 ? 'contained' : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, onClick = props.onClick, handleSubmitWithRedirect = props.handleSubmitWithRedirect, onSave = props.onSave, onSuccess = props.onSuccess, onFailure = props.onFailure, transform = props.transform, rest = __rest(props, ["className", "classes", "invalid", "label", "disabled", "redirect", "saving", "submitOnEnter", "variant", "icon", "onClick", "handleSubmitWithRedirect", "onSave", "onSuccess", "onFailure", "transform"]);
    var classes = useStyles(props);
    var notify = useNotify();
    var translate = useTranslate();
    var setOnSave = useContext(FormContext).setOnSave;
    var _d = useContext(SideEffectContext), setOnSuccess = _d.setOnSuccess, setOnFailure = _d.setOnFailure, setTransform = _d.setTransform;
    var handleClick = function (event) {
        // deprecated: use onSuccess and transform instead of onSave
        if (typeof onSave === 'function') {
            if (process.env.NODE_ENV !== 'production') {
                console.log('<SaveButton onSave> prop is deprecated, use the onSuccess prop instead.');
            }
            setOnSave(onSave);
        }
        else {
            // we reset to the Form default save function
            setOnSave();
        }
        if (onSuccess) {
            setOnSuccess(onSuccess);
        }
        if (onFailure) {
            setOnFailure(onFailure);
        }
        if (transform) {
            setTransform(transform);
        }
        if (saving) {
            // prevent double submission
            event.preventDefault();
        }
        else {
            if (invalid) {
                notify('ra.message.invalid_form', 'warning');
            }
            // always submit form explicitly regardless of button type
            if (event) {
                event.preventDefault();
            }
            handleSubmitWithRedirect(redirect);
        }
        if (typeof onClick === 'function') {
            onClick(event);
        }
    };
    var type = submitOnEnter ? 'submit' : 'button';
    var displayedLabel = label && translate(label, { _: label });
    return (React.createElement(Button, __assign({ className: classnames(classes.button, className), variant: variant, type: type, onClick: handleClick, color: saving ? 'default' : 'primary', "aria-label": displayedLabel, disabled: disabled }, sanitizeButtonRestProps(rest)),
        saving ? (React.createElement(CircularProgress, { size: 18, thickness: 2, className: classes.leftIcon })) : (cloneElement(icon, {
            className: classnames(classes.leftIcon, classes.icon),
        })),
        displayedLabel));
};
var defaultIcon = React.createElement(ContentSave, null);
var useStyles = makeStyles(function (theme) { return ({
    button: {
        position: 'relative',
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    icon: {
        fontSize: 18,
    },
}); }, { name: 'RaSaveButton' });
SaveButton.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object,
    handleSubmitWithRedirect: PropTypes.func,
    // @deprecated
    onSave: PropTypes.func,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    saving: PropTypes.bool,
    submitOnEnter: PropTypes.bool,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    icon: PropTypes.element,
};
export default SaveButton;
