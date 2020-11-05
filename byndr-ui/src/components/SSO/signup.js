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
import Checkbox from '@material-ui/core/Checkbox';



const styles = (theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
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
            <Typography variant="h4">{children}</Typography>
        </MuiDialogTitle>
    );
});

const DialogCheckBox = withStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(0.5),
    },
}))(MuiDialogContent);

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
        padding: '0.5rem 4rem',

        // padding: theme.spacing(0.5),
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
        showConfirmPassword: false,
        checked: false,
    });

    const [errors, setErrors] = React.useState({
        message: "",
    });

    let [isValid, setIsValid] = React.useState(true);


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

  function validate(_callback)  {
        // validate email
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(values.email))
         {
            setIsValid(!isValid);
            setErrors({ ...errors, message: "Please enter valid email address."});

         }
         else if(pattern.test(values.email)){
            setErrors({ ...errors, message: ""});
         }

         _callback();
        //  return isValid;

    }
    console.log(isValid, "i am outside");

 function handleSubmit() {
         validate(()=> console.log('huzzah, I\'m done!'));

        console.log(isValid, "i am inside");
        if(isValid){
            console.log("valid");
        }
        // validate();

    }


    const handleClickShowPassword = (prop) => () => {
        console.log(prop);
        if (values.password && prop === 'showPassword')
            setValues({ ...values, [prop]: !values.showPassword });
        else if (values.confirmPassword && prop === 'showConfirmPassword')
            setValues({ ...values, [prop]: !values.showConfirmPassword });
        else
            setValues({ ...values, [prop]: !values.checked });
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

                    <FormControl variant="outlined" style={{ width: '23rem' }}>
                        <InputLabel htmlFor="component-outlined" style={{ fontSize: 'small' }}>Mobile Number</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "0.5rem"
                                }
                            }}
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
                    <FormControl variant="outlined" style={{ width: '23rem' }}>
                        <InputLabel htmlFor="component-outlined" style={{ fontSize: 'small' }}>Email Address</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "0.5rem"
                                }
                            }}
                            value={values.email}
                            onChange={handleChange('email')}
                            label="Email Address"
                            type="email"
                            id="outlined-margin-none"
                            variant="outlined"

                        />

                    </FormControl>
                    <div style={{color: 'red'}}>{errors.message}</div>
                </DialogContent>

                <DialogContent>
                    <FormControl variant="outlined" style={{ width: "23rem" }}>
                        <InputLabel htmlFor="component-outlined" style={{ fontSize: 'small' }}>Create Password</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "0.5rem"
                                }
                            }}
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
                                        onClick={handleClickShowPassword('showPassword')}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="small"
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
                    <FormControl variant="outlined" style={{ width: "23rem" }}>
                        <InputLabel htmlFor="component-outlined" style={{ fontSize: 'small' }}>Confirm Password</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                style: {
                                    height: "0.5rem"
                                }
                            }}
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
                                        onClick={handleClickShowPassword('showConfirmPassword')}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="small"
                                    >
                                        {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </DialogContent>

                <DialogCheckBox>
                    <FormControl style={{ width: '2rem' }}>
                        <Checkbox
                            // defaultChecked
                            // color="primary"
                            color="default"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </FormControl>
                    <FormControl >
                        <Typography
                            variant="subtitle2"
                            gutterBottom={true}
                            style={{ marginTop: '0.7rem' }}
                            align="right"

                        >I accept all the <a href="xyz">Terms & conditions</a> and <a href="xyz">Privacy ploicy</a></Typography>
                    </FormControl>
                </DialogCheckBox>

                <DialogActions>
                    <Button style={{ width: '65%' }} variant="contained" size="large" color="primary" onClick={handleSubmit}>
                        Sign Up
          </Button>
                </DialogActions>
                <DialogActions style={{ marginBottom: '2rem' }}>
                    <a href="/">Log In instead</a>
                </DialogActions>
            </Dialog>
        </div>
    );
}
