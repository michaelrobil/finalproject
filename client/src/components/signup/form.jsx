import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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
}));

export default function SignUp() {
  const classes = useStyles();

  const [signUpCredentials, setSignUpCredentials] = useState({
    companyName: "",
    email: "",
    password:""
  });


function submitSignup(e) {
  e.preventDefault();
  console.log(signUpCredentials)
  // API.apiSearch(searchTerm)
  // .then(res => {
  //   setProducts(res.data);
  // });
}

function uploadImage(e){
  e.preventDefault();
  // console.log(unitId);
  // add an image
  // const myWidget = cloudinary.createUploadWidget({
  //     cloudName: 'ericnrgnash', 
  //     uploadPreset: 'preset1'
  // }, (error, result) => { 
  //     console.log(result)
  //     console.log(error)
  //         // if (!error) { 
  //         //     addPhoto(unitId, result.info.secure_url);
  //         // }
  //     }
  // )
  // myWidget.open();

 }

// $(document).on('click', '.imgBtn', function(e){
//   const unitId = $(this).data('id');
  
// })


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
              city: e.target.value
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          required
          id="state"
          name="state"
          label="State"
          fullWidth />
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
            compDesc: e.target.value
          })}
        /> </Grid>

        <Button variant="contained"
         color="primary"
         fullWidth
         onClick={(e) => uploadImage(e)}
         >
                    Upload Company Image
                  </Button>
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