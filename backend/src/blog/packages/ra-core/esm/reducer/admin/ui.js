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
import { TOGGLE_SIDEBAR, SET_SIDEBAR_VISIBILITY, REFRESH_VIEW, START_OPTIMISTIC_MODE, STOP_OPTIMISTIC_MODE, } from '../../actions';
import { SET_AUTOMATIC_REFRESH, } from '../../actions/uiActions';
// Match the medium breakpoint defined in the material-ui theme
// See https://material-ui.com/customization/breakpoints/#breakpoints
var isDesktop = function () {
    // (min-width: 960px) => theme.breakpoints.up('md')
    return typeof window !== 'undefined' &&
        window.matchMedia &&
        typeof window.matchMedia === 'function'
        ? window.matchMedia('(min-width:960px)').matches
        : false;
};
var defaultState = {
    automaticRefreshEnabled: true,
    sidebarOpen: isDesktop(),
    optimistic: false,
    viewVersion: 0,
};
var uiReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = defaultState; }
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return __assign(__assign({}, previousState), { sidebarOpen: !previousState.sidebarOpen });
        case SET_SIDEBAR_VISIBILITY:
            return __assign(__assign({}, previousState), { sidebarOpen: action.payload });
        case SET_AUTOMATIC_REFRESH:
            return __assign(__assign({}, previousState), { automaticRefreshEnabled: action.payload });
        case REFRESH_VIEW:
            return __assign(__assign({}, previousState), { viewVersion: previousState.viewVersion + 1 });
        case START_OPTIMISTIC_MODE:
            return __assign(__assign({}, previousState), { optimistic: true });
        case STOP_OPTIMISTIC_MODE:
            return __assign(__assign({}, previousState), { optimistic: false });
        default:
            return previousState;
    }
};
export default uiReducer;
