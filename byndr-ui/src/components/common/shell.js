import React from 'react'
import SideBar from './sidebar'
import { makeStyles } from '@material-ui/core/styles';
import TitleBar from './titleBar'

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
}));

export default function Shell(props) {
    const classes = useStyles();
    return (
        <div>
            <SideBar />
            <TitleBar />
            <main className={classes.content}>
                {props.content}
            </main>
        </div>
    )
}
