import React from 'react';
// import Select from "react-select";
import { fade, makeStyles } from '@material-ui/core/styles';
// import Datacard from '../Connect/datacard';
// import { Card, Divider, Typography } from '@material-ui/core';
import Header from '../common/header';
import { useHistory } from "react-router-dom";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleSharpIcon from '@material-ui/icons/ChatBubbleSharp';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Divider, Typography } from '@material-ui/core';
import Videolist from './videolist';


const useStyles = makeStyles((theme) => ({

    selectwrapper: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(0),
        marginLeft: 0,
        width: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1.5),
            width: 'auto',
        },
    },
    NumOfItems: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        marginLeft: "6.5vw",

    },
    selectShow: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "13vw"
    },


    selectSortby: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "1vw",
    },


    Show: {
        marginLeft: "13vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '13ch',
        },
    },
    Sortby: {
        marginLeft: "2vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '10ch',
            marginLeft: "13vw",
        },
    },
    Participants: {
        // marginLeft: "0.1vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '13ch',
        },
    },
    root: {
        maxWidth: 235,
        margin: '1vw 1vw ',
        WebkitFlexFlow: 'column',
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(10),
            width: 235,
        },
    },
}));

const customStyles = {
    option: (base, state) => ({
        ...base,
        color: state.isSelected ? 'black' : 'black',
        ':active': {
            color: state.isSelected ? 'black' : 'black'
        }
    }),
    control: (base, state) => ({
        ...base,
        background: "#F8F8F8",
        // match with the menu
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "blue" : "#F8F8F8",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        // width 
        width: "auto !important",

        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "red" : "blue"
        }
    }),
    menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0
    }),
    menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0
    }),

};



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const dataDummy = [
    { 1: "1", role: "member" },
    { 1: "2", role: "member" },
    { 1: "3", role: "member" },
    { 1: "4", role: "member" },
    { 1: "5", role: "member" },
    { 1: "6", role: "member" },
    { 1: "7", role: "member" },
    { 1: "8", role: "member" }
]

const Videoplay = (props) => {

    let [like, setLike] = React.useState(null);
    let [chat, setChat] = React.useState(null);
    let [star, setStar] = React.useState(null);

    const history = useHistory();
    const [likedCards, updatelikedCards] = React.useState([]);
    const classes = useStyles();
    let nextVideo = "next";

    const handleLike = (prop) => {
        if (prop === 'like') {
            setLike(!like);
        }
        else if (prop === 'chat') {
            setChat(!chat);
        }
        else if (prop === 'star') {
            setStar(!star);
        }

    }

    return (
        <div style={{ backgroundColor: "white" }}>
            <Header />
            <div style={{ borderRight: '2px solid lightgrey', width: '70vw', height: '150vh' }}>

                <div style={{ width: '90%', height: '50vh', border: '1px solid blue', marginLeft: '6vw', marginTop: '3vh' }}>hello</div>

                <div style={{ width: '100%', marginLeft: '6vw' }}>
                    <div style={{ display: 'flex', marginTop: '3vh' }}>
                        <span>title-video</span>
                        <div style={{ marginLeft: '36vw' }}>
                            <IconButton aria-label="add to favorites" size="small" onClick={(() => { handleLike('like'); })}>
                                {
                                    (like ? <FavoriteIcon style={{ color: 'red' }} fontSize="small"
                                    />
                                        : <FavoriteBorderIcon style={{ color: 'lightgrey' }} fontSize="small"
                                        />)
                                }

                            </IconButton>

                            <IconButton aria-label="start chat" size="small" onClick={() => { handleLike('chat'); }} style={{ marginLeft: "1.0em" }}>
                                {
                                    (chat ? <ChatBubbleSharpIcon style={{ color: 'blue' }} fontSize="small"
                                    />
                                        : <ChatBubbleOutlineSharpIcon fontSize="small"
                                        />)
                                }

                            </IconButton>

                            <IconButton aria-label="share" size="small" style={{ marginLeft: '4em' }}>
                                <ShareIcon fontSize="small"
                                    style={{ color: 'lightgrey' }}
                                    onMouseOver={(e) => e.target.style.color = 'blue'}
                                    onMouseOut={(e) => e.target.style.color = 'lightgrey'}
                                />
                            </IconButton>

                            <IconButton aria-label="add to started" size="small" onClick={() => { handleLike('star'); }}>
                                {
                                    (star ? <StarIcon style={{ color: "gold" }} fontSize="small"
                                    />
                                        : <StarBorderOutlinedIcon style={{ color: 'lightgrey' }} fontSize="small"
                                        />)
                                }

                            </IconButton>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: '2vh' }}>
                        <Avatar></Avatar>
                        <span style={{ marginLeft: '1.5vw', marginTop: '1vh' }}>name</span>
                        <div style={{ width: '7vw', height: '3vh', border: '1px solid blue', cursor: 'pointer', marginLeft: '2vw', borderRadius: '5px', textAlign: 'center', marginTop: '1vh' }}>+ connect</div>
                        <div style={{ marginLeft: '40vw', marginTop: '1vh' }}>date</div>
                    </div>
                </div>
                <Divider style={{ marginLeft: '0vw', width: '70vw', marginTop: '2vh' }} />

                <div style={{ marginLeft: '6vw', marginTop: '2vh', border: '1px solid blue', width: '90%', height: '10vh' }}>Description</div>

                <div >

                    <Videolist
                        data={dataDummy}
                        name={nextVideo}
                        size={3}
                    >
                    </Videolist>

                </div>
            </div>


        </div>
    );
}

export default Videoplay;

