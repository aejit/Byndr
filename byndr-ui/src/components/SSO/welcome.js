import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  title:{
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
    color: theme.palette.grey[100],
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
    padding: '1rem 4rem',
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

export default function Welcome() {
  const [open, setOpen] = React.useState(true);
  const preventDefault = (event) => event.preventDefault();
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div style={{filter: `blur(5px)`}}>
      <Dialog  aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title">
          byndr
        </DialogTitle>
        <DialogContent >
          <Typography  variant="h5">
            New Space.
          </Typography>
          <Typography  variant="h5">
            Unlimited Possibilities.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button  style ={{width : '65%'}} variant="contained" size="large" color="primary">
            Sign Up
          </Button>
        </DialogActions>
        <DialogActions style={{marginBottom: '2rem'}}>
          {/* <Button  style ={{width : '65%'}} variant="outlined" size="large" color="primary">
            Log In
          </Button> */}
          <Link href="/profile/settings">
          Log In
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
