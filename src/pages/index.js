import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import withRoot from '../withRoot';
import CheckboxList from "./CheckboxList";
import LayoutGrid from "./LayoutGrid";
import FeedAppBar from "./FeedAppBar";
import axios from 'axios';
import Grid from "@material-ui/core/Grid/Grid";
import Article from "./Article";
import Feed from "./Feed";

const styles = theme => ({
    root: {
        textAlign: 'center',
        padding: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 10,
    },
});

class Index extends Component {
    state = {
        tags: [],
    };
    apiUrl = "http://localhost:5000/tags";

    componentWillMount() {
        axios.get(this.apiUrl).then(res => {
            let tags = res.data.map((tag, i) => {
                return {id: i, value: tag, isChecked: false}
            });
            this.setState({tags: tags});
        });
    }

    updateSelectedTag = (tagName) => {
        let tags = this.state.tags;
        tags.forEach(tag => {
            if (tag.value === tagName) {
                tag.isChecked = !tag.isChecked
            }
        });
        this.setState({tags: tags});
    };

    render() {
        console.log(process.env);

        const {classes} = this.props;
        const {tags} = this.state;

        return (
            <div className={classes.root}>
                <FeedAppBar/>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <CheckboxList updateSelectedTag={this.updateSelectedTag} {...this.state}/>
                    </Grid>
                    <Grid item xs={9}>
                        <Feed {...this.state}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
