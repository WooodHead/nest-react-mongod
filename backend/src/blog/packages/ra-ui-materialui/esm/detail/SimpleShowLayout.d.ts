import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Record } from 'ra-core';
/**
 * Simple Layout for a Show view, showing fields in one column.
 *
 * Receives the current `record` from the parent `<Show>` component,
 * and passes it to its childen. Children should be Field-like components.
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import { Show, SimpleShowLayout, TextField } from 'react-admin';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <SimpleShowLayout>
 *                 <TextField source="title" />
 *             </SimpleShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import * as React from "react";
 *     import { Admin, Resource } from 'react-admin';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
declare const SimpleShowLayout: {
    ({ basePath, className, children, record, resource, version, ...rest }: SimpleShowLayoutProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        record: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        version: PropTypes.Requireable<number>;
    };
};
export interface SimpleShowLayoutProps {
    basePath?: string;
    className?: string;
    children: ReactNode;
    record?: Record;
    resource?: string;
    version?: number;
}
export default SimpleShowLayout;
