/**
 * Trigger a refresh of the page when the page comes back from background after a certain delay
 *
 * @param {number} delay Delay in milliseconds since the time the page was hidden. Defaults to 5 minutes.
 */
declare const useRefreshWhenVisible: (delay?: number) => void;
export default useRefreshWhenVisible;
