import {
    Grid,
    makeStyles,
    Button
} from "@material-ui/core";

import React from "react";

import ChatRightInfoCard from '../../common/Cards/chatRightInfoCard'
import ChatCallCard from '../../common/Cards/chatCallCard'
import GrpChat from '../Messages/grpChat'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 0,
    },

    b_rt: {
        borderRight: "1px solid lightgray",
    },
    title: {
        marginRight: theme.spacing(2),
    },
    countTotal: {
        textAlign: "left",
        font: "normal normal medium 18px / 23px Poppins",
        color: "#4A4A4A",
        opacity: 1
    },
    sortBy: {
        marginRight: 10,
        textAlign: "center",
        font: "normal normal normal 16px/30px Poppins",
        color: "#7B7B7B",
        opacity: 1
    },
    accountType: {
        flexGrow: 1,
    },
    accountTypeWidth: {
        width: 200,
    },
    m_p_left_25: {
        paddingLeft: 25,
        marginRight: 25
    },
    m_top_25: {
        marginTop: 25,
    },
    m_left_25: {
        marginLeft: 25
    },
    sidebar: {
        backgroundColor: "#fff",
        borderLeft: "1px solid #dfdfdf"
    },
    cardTtitle: {
        textAlign: "center",
        font: "normal normal normal 20px/30px Poppins",
        color: "#7F7F7F",
    },
    cardSub: {
        textAlign: "center",
        font: "normal normal normal 20px/30px Poppins",
        color: "#1956E3",
    },
    cardShowAll: {
        textAlign: "center",
        font: "normal normal medium 16px / 30px Poppins",
        color: "#1956E3",
        opacity: 1
    },
    cardFile: {
        textAlign: "center",
        font: "normal normal normal 20px/30px Poppins",
        color: "#7F7F7F"
    },
    cardViewAll: {
        textAlign: "center",
        textDecoration: "underline",
        font: "normal normal normal 16px / 30px Poppins",
        color: "#7F7F7F",
        opacity: 1
    },
    cardCallTime: {
        textAlign: "left",
        font: "normal normal 400 16px/30px Poppins",
        color: "#7F7F7F",
        opacity: 1,
    },
    cardSubText: {
        textAlign: "right",
        font: "normal normal 400 20px/30px Poppins",
        color: "#1956E3",
        opacity: 1,
    },
    voiceCall:{
        fontSize: 20,
        width: "95%",
        [theme.breakpoints.down('1030')]: {
            fontSize: 14,
            width: "92%",
        }
    }

}));

export default function GrpChatVoicecall() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={8}>
                    {/* <GrpHeadCard title='Design Group' />
                    <Grid>
                        <ChatLayout />
                    </Grid> */}
                    <GrpChat />

                </Grid>
                <Grid item xs={12} sm={4} className={classes.sidebar}>
                    <ChatRightInfoCard title={'Voice Calls'} />
                    <Grid item xs={12} sm={12}>
                        <Button className={classes.voiceCall} 
                            style={{
                                textAlign: "center",
                                borderRadius: 5,
                                margin: 10,
                                background: "#1956E3",
                                textTransform: "capitalize",
                                fontWeight: 600
                            }}
                            variant="contained"
                            color="primary"><VideoCallIcon color="inherit" fontSize="small" style={{ float: "left", fontSize: "1.6rem", marginRight: 20 }} /> New Voice Call</Button>
                    </Grid>
                    <Grid>
                        <Grid item xs={12} style={{ padding: 10 }}>
                            <Grid container justify="flex-start">
                                <Grid item xs={6}>
                                    <Typography variant="body2" className={classes.cardCallTime} component="p">
                                        Yesterday
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" className={classes.cardSubText} component="p">
                                        4
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid>{[0, 1, 2, 3].map((value) => {
                            return (
                                <Grid key={value} style={{ padding: 10 }}>
                                    <ChatCallCard
                                        title={'DG Voice call 101'}
                                        userName={'Vinay C'}
                                        callTime={'24:52'}
                                        particepent={'10 Participants'}
                                    />
                                </Grid>
                            );
                        })}
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>
        </div>
    );
}
