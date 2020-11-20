import React from 'react';
import Header from '../common/header';
import Sidebar from '../common/sidebar';
import Navigationbar from '../common/navigationbar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Divider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleSharpIcon from '@material-ui/icons/ChatBubbleSharp';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const useStyles = makeStyles({
    root: {
        maxWidth: 170,
        // width: '13rem',
        // height: '15rem',
        // padding: '1vw',
        margin: '1.5vw 8vw ',
        display: 'flex',
        flexFlow: 'column',
        WebkitFlexFlow: 'column'
    },
});

// const DialogContent = withStyles((theme) => ({
//     root: {
//         padding: '0.5rem 4rem',
//         textAlign: 'center',
//         margin: '0.75rem 0 0 0 '
//     },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//     root: {
//         display: 'flex',
//         justifyContent: 'center',
//         padding: '0.5rem 4rem',
//         margin: '0 0 1rem 0'
//     },
// }))(MuiDialogActions);

export default function HomeScreen() {

    const classes = useStyles();

    // const history = useHistory();

    // const [open] = React.useState(true);

    // function handleSubmit() {
    //     console.log("i am inside callback !!! hurray");
    //     history.push("/login");
    // }

    let [like, setLike] = React.useState(null);
    let [chat, setChat] = React.useState(null);
    let [star, setStar] = React.useState(null);


    const Toggle = (prop) => () => {
        if (prop === "like")
            (like ? setLike(null) : setLike(true));
        else if (prop === "chat")
            (chat ? setChat(null) : setChat(true));
        else if (prop === 'star')
            (star ? setStar(null) : setStar(true));
    }


    return (
        <div style={{}}>
            <Header></Header>
            <div style={{ marginTop: '0.15rem' }}>
                <Navigationbar></Navigationbar>

            </div>
            <Sidebar></Sidebar>

            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="100"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        style={{margin: "0.5vw"}}
                    />
                    <CardContent style={{ display: 'flex', padding: 0, margin: "0.75vw" }}>
                        {/* <Typography gutterBottom variant="h5" component="h5">
                            Lizard
          </Typography> */}
                        <Typography variant="body2" color="textSecondary" component="p" style={{ padding: 0, }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                            {/* ranging */}
                            {/* across all continents except Antarctica */}
                        </Typography>

                        <IconButton aria-label="settings" style={{ padding: 0, display: "flex", alignItems: "baseline" }} size="small">
                            <MoreVertIcon fontSize="small" style={{ color: "lightgrey" }} />
                        </IconButton>

                    </CardContent>

                    <CardContent style={{ display: 'flex', padding: "5px 0px 1px 0px " , margin: "0px 0.5vw"}}>
                        <Typography component="span" color="primary" style={{ fontSize: 'small', padding: 0 }}> By</Typography>
                        <Typography component="span" color="primary" style={{ fontSize: 'small', padding: 0, marginLeft: "0.5em" }}> Time</Typography>
                         <VisibilityOutlinedIcon fontSize="small" style={{  padding: 0, marginLeft: "0.5em" }}/>
                        <Typography component="span" color="primary" style={{ fontSize: 'small', padding: 0, marginLeft: "0.5em" }}> Views</Typography>
                        <Typography component="span" color="primary" style={{ fontSize: 'small', padding: "0px 2px", marginLeft: "0.5em" }}> icon</Typography>
                    </CardContent>

                    <Divider style={{ margin: "3px 0px" }}></Divider>



                </CardActionArea>
                <CardActions style={{ padding: 0, margin: "0px 0.25vw" }}>
                    <IconButton aria-label="add to favorites" size="small" onClick={Toggle('like')}>
                        {
                            (like ? <FavoriteIcon style={{ color: 'red' }} fontSize="small"
                            />
                                : <FavoriteBorderIcon style={{ color: 'lightgrey' }} fontSize="small"
                                />)
                        }

                    </IconButton>

                    <IconButton aria-label="start chat" size="small" onClick={Toggle('chat')}>
                        {
                            (chat ? <ChatBubbleSharpIcon style={{ color: 'blue' }} fontSize="small"
                            />
                                : <ChatBubbleOutlineSharpIcon fontSize="small"
                                />)
                        }

                    </IconButton>

                    <IconButton aria-label="share" size="small" style={{ marginLeft: '2.5em' }}>
                        <ShareIcon fontSize="small"
                            style={{ color: 'lightgrey' }}
                            onMouseOver={(e) => e.target.style.color = 'blue'}
                            onMouseOut={(e) => e.target.style.color = 'lightgrey'}
                        />
                    </IconButton>

                    <IconButton aria-label="add to started" size="small" onClick={Toggle('star')}>
                        {
                            (star ? <StarIcon style={{ color: "gold" }} fontSize="small"
                            />
                                : <StarBorderOutlinedIcon style={{ color: 'lightgrey' }} fontSize="small"
                                />)
                        }

                    </IconButton>

                </CardActions>
            </Card>
            {/* <Dialog aria-labelledby="customized-dialog-title" open={open}>

                <DialogContent>

                    <Typography style={{ color: "gray", display: 'flex', justifyContent: 'center' }} >
                        {`Check your email for changing password`}
                    </Typography>
                </DialogContent>


                <DialogActions>
                    <Button style={{ width: '45%' }} variant="contained" size="large" color="primary" onClick={handleSubmit}>
                        Okay
          </Button>
                </DialogActions>

            </Dialog> */}
        </div>
    );
}
