import React from "react";
import video1 from "../assets/videod/insta_m.mp4";

export default props => {
  return (
    <div id="algus" className="video-container">
      <video autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      <div className="overlay-desc">
        <h1>JoonasNilp</h1>
      </div>
    </div>
  );
};
