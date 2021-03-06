import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #E8E8E8",
        borderRadius: 10,
        marginBottom:15
    },
    cardTtitle: {
        textAlign: "left",
        fontSize: 17,
        color: "#000000",
        opacity: 1,
    },
    cardSubText: {
        textAlign: "left",
        font: "normal normal normal 14px/30px Poppins",
        color: "#7D7D7D",
        opacity: 1
    },
    lastUpdate: {
        textAlign: "left",
        font: "normal normal normal 16px / 30px Poppins",
        color: "#7B7C7E",
        opacity: 1,
        paddingTop: 10
    },
    deskTopView:{
        [theme.breakpoints.down('1030')]: {
            display:'none'
        }
    },
    mobileView:{
        [theme.breakpoints.up('1030')]: {
            display:'none'
        },
        [theme.breakpoints.down('1030')]: {
            display:'block',
            padding:10
        }
    }
}));

export default function ChatMessageCard() {
    const classes = useStyles();
    return (
        <List dense className={classes.root}>
            <ListItem  className={classes.deskTopView}>
                <ListItemText>
                    <Grid item xs={12}>
                        <Grid container justify="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body2" className={classes.cardSubText} component="p">
                                    Vinay C
                                 </Typography>
                                <Typography variant="body2" className={classes.cardTtitle} component="p">
                                    Hello I've Query?
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </ListItemText>
                <ListItemSecondaryAction className={classes.deskTopView}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            <Typography variant="body2" className={classes.cardSubText} component="p">
                                2D Ago
                            </Typography>
                        </Grid>
                    </Grid>
                </ListItemSecondaryAction>
            </ListItem>
            <Grid item xs={12} className={classes.mobileView}>
                <Typography variant="body2" className={classes.cardSubText} component="p">
                    Vinay C
                </Typography>
                <Typography variant="body2" className={classes.cardTtitle} component="p">
                    Hello I've Query?
                </Typography>
                <Typography variant="body2" className={classes.cardSubText} component="p">
                                2D Ago
                </Typography>
            </Grid>
        </List>
    );
}