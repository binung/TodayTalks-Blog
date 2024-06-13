import {
  Avatar,
  CssBaseline,
  Typography,
  Container,
  Grid,
  makeStyles,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
  Link
} from '@material-ui/core';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import registerWithJWT from '../../store/actions/auth/registerAction';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
function SignUpPage({ onUserRegister }) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordRetype: ''
    },
    validationSchema: Yup.object({
      name: Yup.string('Name')
        .required('Name is required'),
      email: Yup.string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: Yup.string('Enter your password')
        .min(6, 'Password should be of minimum 6 characters length')
        .max(30, 'Password should be of minimum 30 characters length')
        .required('Password is required'),
      passwordRetype: Yup.string('Retype password')
        .min(6, 'Password should be of minimum 6 characters length')
        .max(30, 'Password should be of minimum 30 characters length')
        .required('Password is required')
        .when('password', {
          is: (val) => !!(val && val.length > 0),
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            'Passwords do not match'
          )
        }),
    }),
    onSubmit: (values,{ resetForm }) => {
      onUserRegister(values, resetForm);
    }
  });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                fullWidth
                id="firstName"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="passwordRetype"
                label="Retype Password"
                type="password"
                id="passwordRetype"
                value={formik.values.passwordRetype}
                onChange={formik.handleChange}
                error={formik.touched.passwordRetype && Boolean(formik.errors.passwordRetype)}
                helperText={formik.touched.passwordRetype && formik.errors.passwordRetype}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


const mapDispatchToProps = (dispatch) => ({
  onUserRegister: (values, resetForm) => dispatch(registerWithJWT(values,resetForm))
});
export default connect(null, mapDispatchToProps)(SignUpPage);