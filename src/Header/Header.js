import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { Container } from '@material-ui/core';
import './Header.css'
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    brandText: {
        textDecoration: 'none',
        color: 'yellow',
    }
}));

export default function Header() {
    const classes = useStyles();
    let history = useHistory();

    const goBackBtn = () => {
        history.push('/home');
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        
                        <Typography variant="h6" className={classes.title}>
                            <Link className={classes.brandText} to='/home'>Social Network</Link>
                    </Typography>
                        <Button onClick={goBackBtn} color="inherit">Previos page</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}