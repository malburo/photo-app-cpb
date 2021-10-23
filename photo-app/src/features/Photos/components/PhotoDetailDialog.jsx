import { Avatar, Box, Divider, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import commentApi from 'api/commentApi';
import photoApi from 'api/photoApi';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CommentForm from './Forms/CommentForm';

const useStyles = makeStyles(() => ({
  image: {
    height: '100%',
  },
  photoLabel: {
    textAlign: 'center',
    margin: '5px 0px 20px 0px',
  },
  avatar: {
    borderRadius: '50%',
    margin: '0px 20px 0px 0px',
  },
  fullname: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '16px',
    color: '#0d0c22',
    cursor: 'pointer',
    '&:hover': {
      color: '#2f80ed',
    },
  },
  contentComment: {
    fontSize: '14px',
    color: '#3d3d4e',
  },
  date: {
    fontSize: '14px',
    color: '#3d3d4e',
  },
  auth: {
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#e8e8e8',
    padding: 10,
  },
}));

const PhotoDetailDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [auth, setAuth] = useState(false);
  const [photo, setPhoto] = useState({});
  const [date, setDate] = useState('');
  const [commentList, setCommentList] = useState([]);
  const history = useHistory();
  const { photoId } = useParams();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!localStorage.access_token) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [commentList]);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commentList]);

  useEffect(() => {
    const featchPhoto = async () => {
      const data = await photoApi.getById(photoId);
      const dataComment = await commentApi.getByPhotoId(photoId);
      const date = new Date(data.photo.createdAt);

      setCommentList(dataComment.commentList);
      setPhoto(data.photo);
      setDate(date.toDateString());
    };
    featchPhoto();
  }, [history, photoId]);

  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };
  const handleSubmitComment = async (values) => {
    const payload = {
      photoId,
      content: values.content,
    };
    const data = await commentApi.createComment(payload);
    setCommentList([...commentList, data.newComment]);
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <Box display="flex" justifyContent="center" margin="50px">
        <Box height="600px" minWidth="600px">
          <img src={photo.photoUrl} alt={photo.photoLabel} className={classes.image} />
          <Typography variant="h6" color="initial" style={{ textAlign: 'center' }}>
            {photo.photoLabel}
          </Typography>
        </Box>
        <Box width="300px" marginLeft="30px">
          <Box display="flex" alignItems="center" marginBottom="10px">
            <Avatar variant="rounded" src={photo.userId?.profilePictureUrl} className={classes.avatar} />
            <Box>
              <Typography
                variant="h6"
                className={classes?.fullname}
                onClick={() => history.push(`/gallery/${photo.userId?._id}`)}
              >
                {photo.userId?.fullname}
              </Typography>
              <Typography variant="h6" className={classes.date}>
                {date}
              </Typography>
            </Box>
          </Box>
          <Divider style={{ height: '0.5px' }} />
          <Box width="100%" height="454px" overflow="scroll" style={{ wordBreak: 'break-word' }} marginTop="20px">
            {commentList.map((comment) => (
              <Box key={comment._id} display="flex" marginBottom="20px">
                <Avatar variant="rounded" src={comment.userId?.profilePictureUrl} className={classes.avatar} />
                <Box>
                  <Typography
                    variant="h6"
                    className={classes?.fullname}
                    onClick={() => history.push(`/gallery/${comment.userId._id}`)}
                  >
                    {comment.userId?.fullname}
                  </Typography>
                  <Typography variant="h6" className={classes.contentComment}>
                    {comment.content}
                  </Typography>
                </Box>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>
          {auth ? (
            <CommentForm onSubmitComment={handleSubmitComment} />
          ) : (
            <Typography variant="h6" color="initial" className={classes.auth}>
              Login to comment...
            </Typography>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default PhotoDetailDialog;
