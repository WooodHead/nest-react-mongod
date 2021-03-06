import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
var useStyles = makeStyles(function (theme) { return ({
    root: {
        backgroundColor: theme.palette.grey[300],
        display: 'flex',
    },
}); }, { name: 'RaPlaceholder' });
var Placeholder = function (props) {
    var classes = useStyles(props);
    return (React.createElement("div", { className: classnames(classes.root, props.className) }, "\u00A0"));
};
export default Placeholder;
