import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src= {avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />}  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text} </p>
            </div>
          </div>
          <img src={image}  />
          <div className="post__footer">
            <ChatBubbleIcon fontSize="small" />
            <RepeatRoundedIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishOutlinedIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;