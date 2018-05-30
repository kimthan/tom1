import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleham() {
    let ham = document.querySelector(".closedham");
    ham.classList.remove("closedham");
    ham.classList.add("openham");
  }

  handlecloseham(){
    let ham = document.querySelector(".openham");
    ham.classList.remove("openham");
    ham.classList.add("closedham");
  }
  render() {
    return (
      <div>
        <div className="closedham">
        <h1 onClick={this.handlecloseham}><a href="#">X</a></h1>
          <h1><a href="#">Hem</a></h1>
          <h1><a href="#">Behandling</a></h1>
          <h1><a href="#">Kontakt</a></h1>
        </div>
        <section>
          <nav className="nav">
            <h1 onClick={this.handleham}>
              <i className="fas fa-bars" />
            </h1>
            <h1 className="loggo">
              <a href="#">Loggo</a>
            </h1>
            <ul>
              <li><a href="#">Hem</a></li>
              <li><a href="#">Behandling</a></li>
              <li><a href="#">Kontakt</a></li>
            </ul>
          </nav>
        </section>
        <section>
          <div className="wrapper">
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/300x300" />
              <p>Klippning</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/301x300" />
              <p>Tatuering</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/302x300" />
              <p>Nagel</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/303x300" />
              <p>Massage</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/304x300" />
              <p>Skägg</p>
            </div>
            <div className="bild">
              <img className="bildimg" src="https://source.unsplash.com/random/305x300" />
              <p>Vaxning</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
