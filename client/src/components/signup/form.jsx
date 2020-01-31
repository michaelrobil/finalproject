import React, { useState } from 'react';
import API from "../../utils/API";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const categories = [
  "barbershop", "salon", "beauty", "tattoo", "nails", "piercings", "photography"
];


const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [signUpCredentials, setSignUpCredentials] = useState({
    email: "",
    password:"",
    companyName: "",
    companyCategory: "",
    companyDescription: "",
    companyCity: "",
    companyState: "",
  });


function submitSignup(e) {
  e.preventDefault();
  API.userSignUp(signUpCredentials)
  .then(console.log("created !"));
}
const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="compName"
                label="Company Name"
                autoFocus
                onChange={(e) => setSignUpCredentials({
                  ...signUpCredentials,
                  companyName: e.target.value
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setSignUpCredentials({
                  ...signUpCredentials,
                  email: e.target.value
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setSignUpCredentials({
                  ...signUpCredentials,
                  password: e.target.value
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            onChange={(e) => setSignUpCredentials({
              ...signUpCredentials,
              companyCity: e.target.value
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          required
          id="state"
          name="state"
          label="State"
          onChange={(e) => setSignUpCredentials({
            ...signUpCredentials,
            companyState: e.target.value
          })}

          fullWidth />
        </Grid>
        <Grid item xs={12}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={signUpCredentials.companyCategory}
          onChange={(e) => setSignUpCredentials({
            ...signUpCredentials,
            companyCategory: e.target.value
          })}
    labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map(o=>{ return<MenuItem value={o}>{o}</MenuItem>
          })}
        </Select>
      </FormControl>
            </Grid>

        <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          multiline
          fullWidth
          rows="4"
          variant="outlined"
          label="Company Description"
          onChange={(e) => setSignUpCredentials({
            ...signUpCredentials,
            companyDescription: e.target.value
          })}
        /> </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => submitSignup(e)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            {/* <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
    </Container>
  );
}