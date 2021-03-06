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
import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import ActionDelete from '@material-ui/icons/Delete';
import { fade } from '@material-ui/core/styles/colorManipulator';
import inflection from 'inflection';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate, useDeleteMany, useRefresh, useNotify, useUnselectAll, CRUD_DELETE_MANY, } from 'ra-core';
import Confirm from '../layout/Confirm';
import Button from './Button';
var useStyles = makeStyles(function (theme) { return ({
    deleteButton: {
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
}); }, { name: 'RaBulkDeleteWithConfirmButton' });
var defaultIcon = React.createElement(ActionDelete, null);
var BulkDeleteWithConfirmButton = function (props) {
    var basePath = props.basePath, classesOverride = props.classes, _a = props.confirmTitle, confirmTitle = _a === void 0 ? 'ra.message.bulk_delete_title' : _a, _b = props.confirmContent, confirmContent = _b === void 0 ? 'ra.message.bulk_delete_content' : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, label = props.label, onClick = props.onClick, resource = props.resource, selectedIds = props.selectedIds, rest = __rest(props, ["basePath", "classes", "confirmTitle", "confirmContent", "icon", "label", "onClick", "resource", "selectedIds"]);
    var _d = useState(false), isOpen = _d[0], setOpen = _d[1];
    var classes = useStyles(props);
    var notify = useNotify();
    var unselectAll = useUnselectAll();
    var refresh = useRefresh();
    var translate = useTranslate();
    var _e = useDeleteMany(resource, selectedIds, {
        action: CRUD_DELETE_MANY,
        onSuccess: function () {
            refresh();
            notify('ra.notification.deleted', 'info', {
                smart_count: selectedIds.length,
            });
            unselectAll(resource);
        },
        onFailure: function (error) {
            notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', 'warning');
            setOpen(false);
        },
    }), deleteMany = _e[0], loading = _e[1].loading;
    var handleClick = function (e) {
        setOpen(true);
        e.stopPropagation();
    };
    var handleDialogClose = function () {
        setOpen(false);
    };
    var handleDelete = function (e) {
        deleteMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(Fragment, null,
        React.createElement(Button, __assign({ onClick: handleClick, label: label, className: classes.deleteButton }, sanitizeRestProps(rest)), icon),
        React.createElement(Confirm, { isOpen: isOpen, loading: loading, title: confirmTitle, content: confirmContent, translateOptions: {
                smart_count: selectedIds.length,
                name: translate("resources." + resource + ".forcedCaseName", {
                    smart_count: selectedIds.length,
                    _: inflection.humanize(translate("resources." + resource + ".name", {
                        smart_count: selectedIds.length,
                        _: inflection.inflect(resource, selectedIds.length),
                    }), true),
                }),
            }, onConfirm: handleDelete, onClose: handleDialogClose })));
};
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, classes = _a.classes, filterValues = _a.filterValues, label = _a.label, rest = __rest(_a, ["basePath", "classes", "filterValues", "label"]);
    return rest;
};
BulkDeleteWithConfirmButton.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    confirmTitle: PropTypes.string,
    confirmContent: PropTypes.string,
    label: PropTypes.string,
    resource: PropTypes.string.isRequired,
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
    icon: PropTypes.element,
};
BulkDeleteWithConfirmButton.defaultProps = {
    label: 'ra.action.delete',
};
export default BulkDeleteWithConfirmButton;
