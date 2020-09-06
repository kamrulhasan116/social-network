import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { makeStyles, Container } from '@material-ui/core';
import './PostDetail.css'
import Comments from '../Comments/Comments';


const useStyles = makeStyles({
    root: {
        background: 'purple',
        borderRadius: 20,
        color: 'white',
        padding: '10px 30px',
        marginBottom: '10px',
        MarginTop: '10px',
        border: '1px solid grey'
    },
    color: {
        color: 'white',
    },
    textStyle: {
        color: 'yellow',
        fontWeight: 'bold',
      }

});

const PostDetail = () => {
    const classes = useStyles();
    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetail(data));
    }, [postId])

    return (
        <div>
            <Header />
            <Container maxWidth='sm'>
                <div className={classes.root}>
                    <p>  <span className={classes.textStyle}>ID: {postDetail.id}</span> </p>
                    <p> <span className={classes.textStyle}>Title:</span> {postDetail.title}</p>
                    <p> <span className={classes.textStyle}>Body:</span> <br/> {postDetail.body}</p>
                </div>
                <h3 className={classes.textStyle}>Do your Comment: {}</h3>
                <div className={classes.root}>
                    <Comments postId={postId}/>
                </div>
            </Container>
        </div>
    );
};

export default PostDetail;
