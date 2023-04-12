import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { default as Container, default as Copyright } from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import * as React from 'react';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#212B36',
      },
    },
  });
  const handleSubmit = (values, props) => {
    console.log(values);
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    retypePassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Your Name is too short'),
    email: Yup.string().email('Enter valid email'),
    password: Yup.string().min(8, 'Password minimum length should be 8'),
    retypePassword: Yup.string().oneOf([Yup.ref('password')], 'Password not matched'),
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4">
              Sign Up
            </Typography>

            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
              {(props) => (
                <Form>
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    helperText={<ErrorMessage name="name" />}
                  />
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={<ErrorMessage name="password" />}
                  />
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="retypePassword"
                    label="Retype Password"
                    type="password"
                    id="retypePassword"
                    autoComplete="current-password"
                    helperText={<ErrorMessage name="retypePassword" />}
                  />
                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {'You have an account? Sign In'}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default RegisterForm;
