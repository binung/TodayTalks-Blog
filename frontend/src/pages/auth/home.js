import { Card, CardActionArea, CardMedia, CardContent, Typography, Container, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import React from 'react';
import { history } from '../../helpers';
import ActionTypes from '../../store/action-types';



const Home = ({ user, onUserLogout }) => {
    const logOut = () => {
        onUserLogout();
        history.push('/login');
    }
    return (
        <Container component="main" maxWidth="xs">

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://via.placeholder.com/200X140"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {user.name}
                        </Typography>
                        <Typography variant="body2">
                            {user.email}
                        </Typography>
                        <Button
                            onClick={logOut}
                            variant="contained"
                            color="primary"
                        >
                            Logout
                        </Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    user: state.auth.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    onUserLogout: () => dispatch({ type: ActionTypes.LOGOUT_USER })
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);