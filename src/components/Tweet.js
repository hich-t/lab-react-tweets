import React from "react";




const Tweet = (props) => {
  return (
    <div className="tweet">
      <img
        src={props.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.user.name}</span>
            <span className="handle">{props.user.handle}</span>
          </span>

          <span className="timestamp">{props.timestamp}</span>
        </div>

        <p className="message">
          {props.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}



export default Tweet;
