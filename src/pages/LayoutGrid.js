import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CheckboxList from "./CheckboxList";
import Article from "./Article";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function LayoutGrid(props) {
    const { classes } = props;
    const { tags } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <CheckboxList tags={tags} />
                </Grid>
                <Grid item xs={9}>
                    <Article/>
                </Grid>
            </Grid>
        </div>
    );
}

LayoutGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LayoutGrid);
