import React from 'react';
import Select from "react-select";
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Header from '../common/header';
import { Button, Typography } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';

//drawer
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import IconButton from '@material-ui/core/IconButton';
import PlaylistAlbum from './playlistAlbum';
import { useHistory } from "react-router-dom";


const drawerWidth = 440;

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
    selectShow: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "2vw",
        [theme.breakpoints.down('md')]: {
            marginLeft: '1vw'
        },
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

    totalplaylist: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey',
        marginLeft: "28vw",
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },

    Show: {
        marginLeft: "2vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '13ch',
            marginLeft: '1vw'
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
            marginLeft: "1vw",
        },
    },
    createplaylist: {
        marginLeft: "32vw",
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
        transition: theme.transitions.create('width'),
        width: '20ch',
        [theme.breakpoints.down('md')]: {
            width: '20ch',
            marginLeft: "auto",
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
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: 0,
    },
    contentShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    hide: {
        display: 'none',
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

export default function Uplloadvideo() {


    const [likedCards, updatelikedCards] = React.useState([]);
    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const history = useHistory();


    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    return (
        <div style={{ backgroundColor: "white", height: "100%" }}>
            <Header />
            {/* <CssBaseline /> */}

            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div style={{ display: "flex", marginTop: "2vh" }}>
                    <div className={classes.selectwrapper} >

                        <div className={classes.selectShow}>
                            Show
                        </div>

                        <div style={{ display: "flex" }}>
                            <div className={classes.Show} >
                                <Select
                                    defaultValue={options[0]}
                                    options={options}
                                    styles={customStyles}
                                    autosize={true}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary: 'lightgrey',
                                            primary25: '#F8F8F8',

                                        },
                                    })}
                                    components={{
                                        IndicatorSeparator: () => null
                                    }}

                                />
                            </div>
                            <div className={classes.selectwrapper} >

                                <div className={classes.selectSortby}>
                                    Sort By
                    </div>

                                <div className={classes.Sortby}>
                                    <Select
                                        defaultValue={options[0]}
                                        options={options}
                                        styles={customStyles}
                                        autosize={true}
                                        theme={theme => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary: 'lightgrey',
                                                primary25: '#F8F8F8',

                                            },
                                        })}
                                        components={{
                                            IndicatorSeparator: () => null
                                        }}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.selectwrapper} >

                        {/* <div className={clsx(classes.totalplaylist, {
                            [classes.hide]: open,
                        })} >
                            10 Playlists
                        </div> */}


                        {/* <div className={classes.createplaylist}>
                            <Button variant="contained" color="primary" startIcon={<AddIcon />} 
                                className={clsx(open && classes.hide)}>CREATE PLAYLIST</Button>
                        </div> */}
                    </div>

                </div>

                <div>
                    <div style={{ marginLeft: "4vw", marginTop: '3vh', width: '76%', backgroundColor: "gold", padding: "1em", borderRadius: '15px' }}>
                        <Typography variant="h5">
                            Hey Name,
                        </Typography>
                        <Typography variant="h5">
                            Let's Start a Broadcast!
                        </Typography>
                        <div style={{ display: "flex", flexFlow: "wrap" }}>
                            <div style={{ border: '1px solid black', borderRadius: '4px', padding: '0.25em', backgroundColor: 'white', cursor: 'pointer', marginTop: '2vh' }}
                                onClick={() => { console.log('hello'); history.push('/broadcast/startbroadcast') }}
                            >
                                New Broadcast
                        </div>
                            {/* <div style={{ border: '1px solid black', borderRadius: '4px', padding: '0.25em', marginLeft: '0.5vw', cursor: 'pointer' }}>
                                Upload Video</div> */}
                        </div>
                    </div>
                </div>


                <div style={{ display: "flex", flexFlow: "wrap", marginLeft: '4vw', marginTop: '2vh' }} >

                    {
                        dataDummy.map((data) =>

                            <PlaylistAlbum
                                data={data}
                                updatelikedCards={updatelikedCards}
                                likedCards={likedCards}>
                            </PlaylistAlbum>
                        )}
                </div>
            </main>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    {/* <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton> */}
                    <Typography style={{ marginTop: '5vh', textAlign: 'center' }}> Hello</Typography>
                </div>
            </Drawer>

        </div>
    );
}
