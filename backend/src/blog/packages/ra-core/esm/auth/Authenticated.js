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
import { cloneElement } from 'react';
import useAuthenticated from './useAuthenticated';
/**
 * Restrict access to children to authenticated users.
 * Redirects anonymous users to the login page.
 *
 * Use it to decorate your custom page components to require
 * authentication.
 *
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @see useAuthenticated
 *
 * @example
 *     import { Authenticated } from 'react-admin';
 *
 *     const CustomRoutes = [
 *         <Route path="/foo" render={() =>
 *             <Authenticated authParams={{ foo: 'bar' }}>
 *                 <Foo />
 *             </Authenticated>
 *         } />
 *     ];
 *     const App = () => (
 *         <Admin customRoutes={customRoutes}>
 *             ...
 *         </Admin>
 *     );
 */
var Authenticated = function (_a) {
    var authParams = _a.authParams, children = _a.children, location = _a.location, // kept for backwards compatibility, unused
    rest = __rest(_a, ["authParams", "children", "location"]);
    useAuthenticated(authParams);
    // render the child even though the useAuthenticated() call isn't finished (optimistic rendering)
    // the above hook will log out if the authProvider doesn't validate that the user is authenticated
    return cloneElement(children, rest);
};
export default Authenticated;
