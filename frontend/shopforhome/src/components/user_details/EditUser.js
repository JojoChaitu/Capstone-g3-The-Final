
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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

export default function UserUpdate() {
  const classes = useStyles();

  const { id } = useParams();
  
  useEffect(() => {
    fetch("http://localhost:3003/user/user-lists/"+id)
      .then(res => res.json())
      .then(
        (result) => {
         setIdName(result.user.id)
         setName(result.user.name)
        setEmail(result.user.email)
        }
      )
  }, [id])

  const handleSubmit =async (event) => {
    event.preventDefault();
    var data = {
      'name': name

    }
    await axios.post(`http://localhost:3003/user/update-user/${id}`,{
          name:data.name
    })
  }

  const [Id, setIdName] = useState('id');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('email');

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          User
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Update Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}