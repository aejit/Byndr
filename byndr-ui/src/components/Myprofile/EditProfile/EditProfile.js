import {
    Avatar,
    Badge,
    Button,
    FormControl,
    Grid,
    makeStyles,
    MenuItem,
    Select,
    Typography,
    TextField,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Toolbar,
    Card,
    CardActions,
    CardContent,
    Switch,
    FormControlLabel 
} from "@material-ui/core";





import React from "react";


import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
import AllOutTwoToneIcon from "@material-ui/icons/AllOutTwoTone";
import AspectRatioTwoToneIcon from "@material-ui/icons/AspectRatioTwoTone";
import BrightnessAutoTwoToneIcon from "@material-ui/icons/BrightnessAutoTwoTone";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    b_rt: {
        borderRight: "1px solid lightgray",
    },
    b_tp: {
        borderTop: "1px solid lightgray",
        marginTop: 20,
        paddingLeft: 25,
    },
    b_bm: {
        borderBottom: "1px solid lightgray",
    },
    title: {
        marginRight: theme.spacing(2),
    },
    accoutTypo:{
        textAlign: "center",
        font: "normal normal normal 16px/22px Poppins",
        letterSpacing: 0.24,
        color: "#000000",
        opacity: 0.7
    },
    accountType: {
        flexGrow: 1,
    },
    accountTypeWidth: {
        width: 200,
    },
    accountTitle: {
        textAlign: "left",
        font: "normal 21px",
        letterSpacing: "0px",
        color: "#000000",
        opacity: 0.5
    },
    accountAt: {
        color: "#1956E3"
    },
    m_p_left_25: {
        paddingLeft: 25,
        marginRight: 25
    },
    cardroot: {
        textAlign: "center",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        borderRradius: 15,
      },
      card_title: {
        padding:20,
        fontSize: 20,
        textAlign: "center",
        font: "normal normal medium 20px/27px Poppins",
        color: "#1956E3"
      },
      card_inputFiled:{
        background: "#F7F7F7 0% 0% no-repeat padding-box",
        border: "1px solid #0000001A",
        borderRadius: 10
      },
      pos: {
        marginBottom: 12,
      },
      m_top_25:{
        marginTop: 25,   
      },
      m_left_25:{
          marginLeft:25
      }

}));

export default function EditProfile() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
      setChecked((prev) => !prev);
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3} className={classes.b_rt}>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="center"
                        spacing={2}
                        style={{ paddingTop: 40 }}
                    >
                        <Grid item>
                            <Avatar
                                className={`${classes.large} ${classes.v_mar}`}
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                                varient="square"
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" className={classes.v_mar}>
                                Satish Nampally
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" className={classes.accountTitle}>
                                Journey to Perfection
                            </Typography>
                        </Grid>
                        <Grid item className={classes.v_mar}>
                            <Typography variant="h5">
                                Founder at <span style={{ color: "#1956E3" }} > Byndr Inc</span>
                            </Typography>
                        </Grid>
                        <Grid item className={classes.v_mar}
                            sm={10}>
                            <Typography variant="h3" className={classes.accoutTypo}>
                                Lorem ipsum dolor amet, consetetur sadipscing sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor amet, consetetur
                            </Typography>
                            <Typography style={{ paddingTop: 10, }}>
                                <LocationOnIcon color="primary" />Telangana, India
                            </Typography>
                        </Grid>
                        <Grid className={classes.m_top_25}></Grid>
                        <Grid className={classes.m_top_25}></Grid>
                        <Grid className={classes.m_top_25}></Grid>
                        <Grid item className={classes.v_mar} style={{ justifyContent: "space-between" }}>
                            <Typography style={{ textAlign: "left", color: "#000000", opacity: 1 }}>
                                Published Spaces
                             
                            <span style={{paddingLeft:100, textAlign: "right", color: "#1956E3", opacity: 1 }}>
                                0
                            </span>
                             </Typography>

                        </Grid>
                        <Grid item className={classes.v_mar} style={{ justifyContent: "space-between" }}>
                            <Typography style={{ textAlign: "left", color: "#000000", opacity: 1 }}>
                            Published Paths
                             
                            <span style={{paddingLeft:100, textAlign: "right", color: "#1956E3", opacity: 1 }}>
                                0
                            </span>
                             </Typography>

                        </Grid>

                        <Grid className={classes.m_top_25}></Grid>
                        

                        <Grid item xs={12} sm={8}>
                            <IconButton>
                                <AccountBalanceTwoToneIcon color="primary" />
                            </IconButton>
                            <IconButton>
                                <AllOutTwoToneIcon />
                            </IconButton>
                            <IconButton>
                                <AspectRatioTwoToneIcon />
                            </IconButton>
                            <IconButton>
                                <AccountBalanceTwoToneIcon />
                            </IconButton>
                            <IconButton>
                                <BrightnessAutoTwoToneIcon />
                            </IconButton>
                        </Grid>
                        <Grid className={classes.m_top_25}></Grid>
                        <Grid className={classes.m_top_25}></Grid>
                        <Grid className={classes.m_top_25}></Grid>


                        <Grid item xs={12} sm={8}>
                    <Button variant="outlined" color="primary">
                    Edit Profile
                    </Button>
                    </Grid>

                    </Grid>

                   
                    
                </Grid>
                <Grid item xs={12} sm={9}>
                <Button variant="contained" color="primary"  className={`${classes.m_p_left_25}`}>
                Spaces 0
                </Button>
                <Button variant="contained" className={`${classes.m_p_left_25}`}>Paths 0</Button>
                 <Button variant="contained" className={`${classes.m_p_left_25}`}>Broadcasts 0</Button>
                 <Button variant="contained" className={`${classes.m_p_left_25}`}>Collaborations 0</Button>
                  <Button variant="contained" className={`${classes.m_p_left_25}`}>People 0</Button>

                  <Grid item xs={12} sm={12} className={classes.b_rt}>
                  <Grid item xs={12} sm={12} className={`${classes.m_left_25} ${classes.m_top_25}`}>
                  <Toolbar variant="dense">
                    <Typography className={classes.title}>244 Items</Typography>
                    <Typography className={`${classes.m_left_25}`}>Sort By</Typography>
                    <FormControl variant="outlined" className={classes.accountType}>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={10}
                        className={classes.accountTypeWidth}
                        onChange={() => {}}
                    >
                        <MenuItem value={10}>Most Viewed</MenuItem>
                        
                    </Select>
                    </FormControl>
          </Toolbar>
                  </Grid> 
                  <Grid item xs={12} sm={9}   container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={2}
                        style={{ paddingTop: 20 }}>
                  <Grid item  sm={4}  >
                  <Card className={classes.cardroot} item xs={12} sm={3}>
                            <CardContent style={{padding: 20}}>
                            <Avatar
                                    className={`${classes.large} ${classes.v_mar}`}
                                    alt="Travis Howard"
                                    style={{ padding: "20px",
                                        marginLeft: "60px"
                                   }}
                                    src="/static/images/avatar/2.jpg"
                                    />
                                <Typography className={classes.card_title} color="primary" gutterBottom>
                                            New Space. New Possibilities.
                                </Typography>
                                <TextField
                                    className={classes.card_inputFiled}
                                    id="standard--flexible"
                                    variant="outlined"
                                    onChange={() => {}}
                                    size="small"
                                    fullWidth
                                    placeholder="Enter Space Name"
                                    />
                                <FormControlLabel
                                    labelPlacement="start"
                                     label="Save as Private"
                                    control={<Switch checked={checked} onChange={toggleChecked} />}
                                   
                                />
                            </CardContent>
                    <CardActions style={{ marginLeft: 50}}>
                                <Button  
                                style={{ textAlign: "center",
                                    font: "normal normal medium 16px/30px Poppins",
                                    borderRadius: 5,
                                   }}
                                variant="contained"
                                color="primary">+ Create New Space</Button>
                    </CardActions>
                    </Card>
    </Grid>
   

                </Grid>  
                 </Grid>




                 </Grid>
            </Grid>
        </div>
    );
}
