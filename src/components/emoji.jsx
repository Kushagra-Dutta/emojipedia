import React from "react";

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emo}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Emoji;
