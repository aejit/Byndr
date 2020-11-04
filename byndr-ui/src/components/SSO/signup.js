import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextMaskCustom from './textmaskcustom';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';


const styles = (theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(5),
    },
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[10],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.title} {...other}>
            <Typography variant="h3">{children}</Typography>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: '0.5rem 4rem',
        textAlign: 'center'
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(1.5),
    },
}))(MuiDialogActions);

export default function Signup() {
    const [open] = React.useState(true);

    const [values, setValues] = React.useState({
        phoneNumber: "",
        password: "",
        email: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div style={{ filter: `blur(5px)` }}>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title">
                    Sign Up
        </DialogTitle>
                <DialogContent >

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Mobile Number</InputLabel>
                        <OutlinedInput
                            value={values.phoneNumber}
                            onChange={handleChange('phoneNumber')}
                            label="Mobile Number"
                            name="textmask"
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCustom}
                            size="small"
                            autoFocus
                        />
                        <FormHelperText id="component-error-text">10 digits</FormHelperText>
                    </FormControl>


                </DialogContent>

                <DialogContent>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Email Address</InputLabel>
                        <OutlinedInput
                            value={values.email}
                            onChange={handleChange('email')}
                            label="Email Address"
                            type="email"
                            id="outlined-margin-none"
                            variant="outlined"

                        />

                    </FormControl>
                </DialogContent>

                <DialogContent>
                    <FormControl variant="outlined" style={{width: "14rem"}}>
                        <InputLabel htmlFor="component-outlined">Create Password</InputLabel>
                        <OutlinedInput
                            value={values.password}
                            onChange={handleChange('password')}
                            label="Create Password"
                            type={values.showPassword ? 'text' : 'password'}
                            id="outlined-adornment-password"
                            variant="outlined"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}

                        />
                    </FormControl>
                </DialogContent>

                <DialogContent>
                    <FormControl variant="outlined" style={{width: "14rem"}}>
                        <InputLabel htmlFor="component-outlined">Confirm Password</InputLabel>
                        <OutlinedInput
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            label="Confirm Password"
                            id="outlined-adornment-confirm-password"
                            variant="outlined"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </DialogContent>

                <DialogActions>
                    <Button style={{ width: '65%' }} variant="contained" size="large" color="primary">
                        Sign Up
          </Button>
                </DialogActions>
                <DialogActions style={{ marginBottom: '2rem' }}>
                    <a href="xyz">Log In instead</a>
                </DialogActions>
            </Dialog>
        </div>
    );
}
