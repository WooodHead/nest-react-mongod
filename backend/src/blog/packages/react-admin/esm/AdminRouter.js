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
import * as React from 'react';
import { CoreAdminRouter } from 'ra-core';
import { Loading } from 'ra-ui-materialui';
var AdminRouter = function (props) { return (React.createElement(CoreAdminRouter, __assign({}, props))); };
AdminRouter.defaultProps = {
    loading: Loading,
};
export default AdminRouter;
