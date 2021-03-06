import { useEffect } from 'react';
import useCheckAuth from './useCheckAuth';
import { useSafeSetState } from '../util/hooks';
var emptyParams = {};
/**
 * Hook for getting the authentication status
 *
 * Calls the authProvider.checkAuth() method asynchronously.
 *
 * The return value updates according to the authProvider request state:
 *
 * - loading: true just after mount, while the authProvider is being called. false once the authProvider has answered.
 * - loaded: the opposite of loading.
 * - authenticated: true while loading. then true or false depending on the authProvider response.
 *
 * To avoid rendering a component and force waiting for the authProvider response, use the useAuthState() hook
 * instead of the useAuthenticated() hook.
 *
 * You can render different content depending on the authenticated status.
 *
 * @see useAuthenticated()
 *
 * @param {Object} params Any params you want to pass to the authProvider
 *
 * @returns The current auth check state. Destructure as { authenticated, error, loading, loaded }.
 *
 * @example
 * import { useAuthState, Loading } from 'react-admin';
 *
 * const MyPage = () => {
 *     const { loading, authenticated } = useAuthState();
 *     if (loading) {
 *         return <Loading />;
 *     }
 *     if (authenticated) {
 *        return <AuthenticatedContent />;
 *     }
 *     return <AnonymousContent />;
 * };
 */
var useAuthState = function (params) {
    if (params === void 0) { params = emptyParams; }
    var _a = useSafeSetState({
        loading: true,
        loaded: false,
        authenticated: true,
    }), state = _a[0], setState = _a[1];
    var checkAuth = useCheckAuth();
    useEffect(function () {
        checkAuth(params, false)
            .then(function () {
            return setState({ loading: false, loaded: true, authenticated: true });
        })
            .catch(function () {
            return setState({ loading: false, loaded: true, authenticated: false });
        });
    }, [checkAuth, params, setState]);
    return state;
};
export default useAuthState;
