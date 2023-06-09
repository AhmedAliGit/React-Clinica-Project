import React from "react";

function VideoSection() {
  return (
    <div className="video-sec bgIMG">
      <div className="sec2-container">
        <div className="container sec2-1 mt-2">
          <span
            className="fa fa-play fa-3x text-decoration-none"
            role="button"
            aria-hidden="true"
          ></span>
          <h5 className="mt-5 text-dark fw-bold fs-3">PLAY INTRO VIDEO</h5>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
