import React from "react";
import loodus1 from "../assets/images/esileht/card1.jpg";
import droon1 from "../assets/images/esileht/card2.jpg";
import uritus1 from "../assets/images/esileht/card3.jpg";

export default props => {
  return (
    <section id="skills">
      <div className="millegaTeglen">
        <h3>Millega ma tegelen</h3>
        <hr />
        <div className="row">
          <div className="col s12 m4">
            <div className="background-text text-faded">
              <div className="card">
                <div className="card-image">
                  <img src={loodus1} alt="Loodus" />
                  <span className="card-title">Loodusfotod</span>
                </div>
                <div className="card-content">
                  <p>
                    Tavalised pildid loodusest ja muudest huvitavatest kohtadest
                  </p>
                </div>
                <div className="card-action">
                  <a
                    class="waves-effect waves-light btn modal-trigger tooltipped"
                    data-position="right"
                    data-tooltip="Avaneb uues aknas"
                    href="#modal1"
                  >
                    Vaata galeriid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="background-text text-faded">
              <div className="card">
                <div className="card-image">
                  <img src={droon1} alt="Loodus" />
                  <span className="card-title">Droonifotod</span>
                </div>
                <div className="card-content">
                  <p>Võimalik ka droonifotosi/videosi teha</p>
                </div>
                <div className="card-action">
                  <a
                    class="waves-effect waves-light btn modal-trigger tooltipped"
                    data-position="right"
                    data-tooltip="Avaneb uues aknas"
                    href="#modal1"
                  >
                    Vaata galeriid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="background-text text-faded">
              <div className="card">
                <div className="card-image">
                  <img src={uritus1} alt="Loodus" />
                  <span className="card-title">Üritused</span>
                </div>
                <div className="card-content">
                  <p>Ürituste pildistamine</p>
                </div>
                <div className="card-action">
                  <a
                    class="waves-effect waves-light btn modal-trigger tooltipped"
                    data-position="right"
                    data-tooltip="Avaneb uues aknas"
                    href="#modal1"
                  >
                    Vaata galeriid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h3>Tehnika</h3>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col s12 l6 skills">
            <img className="col s3 htmlLogo" src={htmlLogo} alt="HTML" />

            <div className="col s6 skillsText">
              <strong>Fotoaparaat</strong> Nikon
            </div>
          </div>

          <div className="col s12 l6 skills">
            <div className="col s6 push-l6 skillsText">
              <strong>Objektiivid</strong> tele, makro jne.
            </div>
            <img
              className="col s3 pull-l6 jsLogo"
              src={jsLogo}
              alt="Javascript"
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12 l6 skills">
            <img
              className="col s3 jqueryLogo"
              src={jqueryajaxLogo}
              alt="JQuery Ajax"
            />

            <div className="col s6 skillsText">
              <strong>Droon</strong> DJI Phantom 4
            </div>
          </div>

          <div className="col s12 l6 skills">
            <div className="col s6 push-l6 skillsText">
              <strong>Kaamerad</strong> GoPro Hero 4 jne.
            </div>
            <img
              className="col s3 pull-l6 reactLogo"
              src={reactLogo}
              alt="React"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};
