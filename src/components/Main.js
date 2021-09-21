import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import intro from "../components/vid/intro.mp4";
// import ReactPlayer from "react-player";
import "../Style/video.css";
import Loader from "./Loader";
import "../Style/home.css";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    };
  }
  render() {
    return (
      <>
        {this.props.loader ? (
          <Loader />
        ) : (
          <>
            <section className="backG">
              <div class="d-flex justify-content-center">
                <Carousel id="shad" fade className="d-block w-100">
                  {this.props.museumData.slice(0, 7).map((element) => {
                    return (
                      <Carousel.Item interval={1500}>
                        <img
                          className="d-block w-100"
                          src={element.museum_image}
                          alt="Image One"
                          height="600px"
                        />
                        <Carousel.Caption>
                          <h3>{element.name}</h3>
                          <p>{element.location}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </section>
            <div
              style={{
                marginLeft: "100px",
                marginRight: "100px",
                marginTop: "50px",
              }}
            >
              <Row xs={1} md={3} className="g-4">
                {this.props.paintingsData.slice(0, 6).map((element) => {
                  return (
                    <figure>
                      <div id="paintingHomeDiv">
                        <Card
                          style={{
                            width: "18rem",

                            margin: "50px",
                          }}
                        >
                          <Card.Body
                            style={{
                              color: "black",
                              padding: "0",
                            }}
                          >
                            <Card.Img
                              id="imageHome"
                              variant="top"
                              src={element.image_id}
                              alt={element.description_image1}
                            />
                          </Card.Body>
                        </Card>
                      </div>
                    </figure>
                  );
                })}
              </Row>
            </div>
          
          </>
        )}
      </>
    );
  }
}

export default Main;

// <div className="player-wrapper">
// <ReactPlayer
//   playing
//   url={intro}
//   height="100%"
//   width="100%"
//   muted="false"
//   loop="true"
// />

// <div class="overlay">

//   <h2>
//     Liza Museum Arts <br /> Enjoy Seeing The Most Famous Museums
//     Around The World
//   </h2>
// </div>
// </div>
