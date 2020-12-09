import React from "react";
import {
    Avatar,
    Badge,
    Button,
    Grid,
    makeStyles,
    Typography,
    TextField,
    Card,
    CardActions,
    CardContent,
    Switch,
    FormControlLabel
} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    cardroot: {
        textAlign: "center",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        borderRradius: 15,
    },
    card_title: {
        padding: 20,
        fontSize: 20,
        textAlign: "center",
        font: "normal normal medium 20px/27px Poppins",
        color: "#1956E3"
    },
    card_inputFiled: {
        background: "#F7F7F7 0% 0% no-repeat padding-box",
        border: "1px solid #0000001A",
        borderRadius: 10
    },


}));

export default function NewCards(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };


    return (<Card className={classes.cardroot} item xs={12} sm={3}>
        <CardContent style={{ padding: 20 }}>
            <Avatar
                className={`${classes.large} ${classes.v_mar}`}
                alt="Travis Howard"
                style={{
                    padding: "20px",
                    marginLeft: "90px"
                }}
                src="/static/images/avatar/2.jpg"
            />
            <Typography className={classes.card_title} color="primary" gutterBottom>
                {props.cardTitle}
            </Typography>
            <TextField
                className={classes.card_inputFiled}
                id="standard--flexible"
                variant="outlined"
                onChange={() => { }}
                size="small"
                fullWidth
                placeholder={props.cardInputPlaceHolder}
            />
            <FormControlLabel
                labelPlacement="start"
                label="Save as Private"
                control={<Switch checked={checked} onChange={toggleChecked} />}

            />
        </CardContent>
        <CardActions style={{ marginLeft: 50 }}>
            <Button
                style={{
                    textAlign: "center",
                    font: "normal normal medium 16px/30px Poppins",
                    borderRadius: 5,
                }}
                variant="contained"
                color="primary">{props.cardButton}</Button>
        </CardActions>
    </Card>);
}
