import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";

const styles = {
    card: {
        minWidth: 275,
        textAlign: 'left',
        marginBottom: 10,
        cursor: 'pointer',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};


function Article(props) {

    let formatDate = (date) => {
        let time = new Date(date);
        return `${time.getFullYear()}/${time.getDate()}/${time.getDate()}`;
    };

    const {classes} = props;
    const {title} = props;
    const {url} = props;
    const {date} = props;
    const {description} = props;
    const {imageurl} = props;

    return (
        <Card
            className={classes.card}
            onClick={() => window.open(url, '_blank')}>
            <CardContent>
                <Grid container spacing={16}>
                    <Grid item xs={9}>
                        <Typography variant="h5" component="h2">
                           {title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {formatDate(date)}
                        </Typography>
                        <Typography component="p">
                            {description}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia
                            className={classes.media}
                            image={imageurl}
                            title="Stub"
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

Article.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);
