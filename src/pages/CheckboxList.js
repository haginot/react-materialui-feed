import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class CheckboxList extends React.Component {

    handleToggle = value => () => this.props.updateSelectedTag(value);

    render() {
        const { classes } = this.props;
        const { tags } = this.props;

        return (
            <List className={classes.root}>
                {tags.map(tag => (
                    <ListItem key={tag.value} role={undefined} dense button onClick={this.handleToggle(tag.value)}>
                        <Checkbox
                            checked={tag.isChecked}
                            tabIndex={-1}
                            disableRipple
                        />
                        <ListItemText primary={tag.value} />
                    </ListItem>
                ))}
            </List>
        );
    }
}

CheckboxList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);
