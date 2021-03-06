import {
    Grid,
    makeStyles,
} from "@material-ui/core";

import React from "react";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from "@material-ui/core/Divider";
import ChatRightInfoCard from '../../common/Cards/chatRightInfoCard'
import ChatSidebarCard from '../../common/Cards/chatSidebarCard'
import ChatMessageCard from '../../common/Cards/chatMessageCard'
import GrpChat from '../Messages/grpChat'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 0,
        height: '100%'
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
        backgroundColor: "#fff"
    },
    cardTtitle: {
        paddingLeft: 10,
        fontSize: 20,
        color: "#7F7F7F",
        paddingTop: 20
    },
    cardSub: {
        textAlign: "center",
        fontSize: 20,
        color: "#1956E3",
    },
    cardShowAll: {
        textAlign: "center",
        fontSize: 16,
        color: "#1956E3",
        opacity: 1,
        fontWeight: 500,
        padding: "20px 0px",
        [theme.breakpoints.down('1030')]: {
            fontSize: 14,
            marginLeft:10
        }
    },
    cardFile: {
        textAlign: "center",
        fontSize: 20,
        color: "#7F7F7F",
        [theme.breakpoints.down('1030')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('780')]: {
            fontSize: 16,
        },
    },
    cardViewAll: {
        textAlign: "center",
        textDecoration: "underline",
        fontSize: 16,
        color: "#7F7F7F",
        opacity: 1
    },
    chatContainer: {
        position: "relative"
    },
    lastChildCss: {
        '&:lastChild': {
            borderBottom: "none",
        }
    }

}));

export default function GrpChatInfo() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={8} style={{ padding: 0 }}>
                    {/* <GrpHeadCard />
                    <Grid style={{ marginTop: 90, }}>
                        <ChatLayout />
                    </Grid> */}
                    <GrpChat />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.sidebar} style={{ borderLeft: "1px solid #dfdfdf" }}>
                    <ChatRightInfoCard title={'Group Info'} />
                    <Grid>
                        <Typography variant="body2" className={classes.cardTtitle} component="p">
                            Participants <span className={classes.cardSub}>24</span>
                        </Typography>
                    </Grid>
                    <Grid>
                        {[0, 1, 2, 3].map((value) => {
                            return (
                                <ChatSidebarCard key={value} className={classes.lastChildCss} />
                            );
                        })}
                    </Grid>
                    <Grid>
                        <Typography variant="body2" className={classes.cardShowAll} component="p">
                            + Show All Members
                        </Typography>
                    </Grid>
                    <Divider />
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        style={{ padding: 20,textAlign:'center' }}
                    >
                        <Grid item lg= {5} md={12}>
                            <Typography variant="body2" className={classes.cardFile} component="p" style={{textAlign:'center'}}>
                                Files Shared
                        </Typography>
                        </Grid>
                        <Grid item lg= {3} md={6}>
                            <Typography variant="body2" className={classes.cardSub} component="p" style={{textAlign:'center'}}>
                                202
                        </Typography>

                        </Grid>
                        <Grid item lg= {4} md={6}>
                            <Typography variant="body2" className={classes.cardViewAll} component="p" style={{textAlign:'center'}}>
                                View All
                            </Typography>
                        </Grid>

                    </Grid>


                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 30, borderBottom: "1px solid #dfdfdf" }}
                    >
                        {[0, 1, 2].map((value) => {
                            return (

                                <Grid item xs={12} lg= {4} md={12} key={value}>
                                    <Avatar
                                        alt="Travis Howard"
                                        src="/static/images/avatar/2.jpg"
                                        sizes='large'
                                        variant="square"
                                        style={{ height: '90px', width: '90px', borderRadius: 10, marginBottom:15, textAlign:'center', marginLeft:'auto', marginRight:'auto'}}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        style={{paddingLeft: 10, paddingTop: 20 }}
                    >
                        <Grid item lg={7} md={12}>
                            <Typography variant="body2" className={classes.cardFile} component="p" style={{textAlign:'center'}}>
                                Starred Messages
                        </Typography>
                        </Grid>
                        <Grid item lg= {1} md={6}>
                            <Typography variant="body2" className={classes.cardSub} component="p" style={{textAlign:'center'}}>
                                22
                        </Typography>

                        </Grid>
                        <Grid item lg= {4} md={6}>
                            <Typography variant="body2" className={classes.cardViewAll} component="p" style={{textAlign:'center'}}>
                                View All
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid style={{ padding: 20 }}>
                        {[0, 1].map((value) => {
                            return (
                                <ChatMessageCard key={value} style={{ marginBottom: 20 }} />
                            );
                        })}
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}
