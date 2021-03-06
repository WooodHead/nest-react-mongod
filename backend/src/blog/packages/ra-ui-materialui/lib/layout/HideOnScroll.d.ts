import * as React from 'react';
import PropTypes from 'prop-types';
declare function HideOnScroll(props: HideOnScrollProps): JSX.Element;
declare namespace HideOnScroll {
    var propTypes: {
        children: PropTypes.Validator<PropTypes.ReactNodeLike>;
    };
}
export interface HideOnScrollProps {
    children: React.ReactElement;
}
export default HideOnScroll;
