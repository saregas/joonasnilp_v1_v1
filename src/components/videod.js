import React from "react";
// import htmlLogo from "../assets/images/skills/fotokas.png";

export default props => {
  return (
    <section id="videod">
      <hr />
      <h3>Videod</h3>
      <div className="container">
        <div className="row">
          <div className="col s12 l4">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                title="Video"
                src="https://www.youtube.com/embed/5TYzFQmlwc8?rel=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col s12 l4">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                title="Video"
                src="https://www.youtube.com/embed/_BRzipBJx2I?rel=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col s12 l4">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                title="Video"
                src="https://www.youtube.com/embed/c-K5T9Q5wfs?rel=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
