import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
};

function FeedAppBar(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        News App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

FeedAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedAppBar);
