import React from "react";
import { Container, Row, Col } from "reactstrap";

export default (props) => (
  <section className="s2">
    <hr />
    <Container>
      <Row className="flex-align">
        {props.imgPos === "left" ? (
          <Col md="7" lg="5" className="s2__mob-pic">
            <img src={props.img} alt="" />
          </Col>
        ) : (
          <></>
        )}

        <Col md="5" lg="5" className="s2__des">
          <h1>
            {props.headingStart} {props.heading}
          </h1>
          <p>{props.desc}</p>
        </Col>
        {props.imgPos === "right" ? (
          <Col md="7" lg="5" className="s2__mob-pic">
            <img src={props.img} alt="" />
          </Col>
        ) : (
          <></>
        )}
      </Row>
      <Row className="flex-align">
        {props.imgPos === "left" ? (
          <Col md="7" lg="5" className="s2__mob-pic">
            {/* <img src={props.img} alt="" /> */}
          </Col>
        ) : (
          <></>
        )}

        <Col md="5" lg="5" className="s2__des">
          {/* <h1>
            {props.headingStart} {props.heading}
          </h1>
          <p>{props.desc}</p> */}

          <div>
            <a
              href="url"
              style={{
                fontSize: "1.125em",
                fontWeight: "600",
                background: "#ffffff",
                color: "#126bc5",
              }}
            >
              {">> Discover our products <<"}
            </a>
          </div>
        </Col>
        {props.imgPos === "right" ? (
          <Col md="7" lg="5" className="s2__mob-pic">
            {/* <img src={props.img} alt="" /> */}
          </Col>
        ) : (
          <></>
        )}
      </Row>
    </Container>
    <style>{`
        .s2 {
            font-size: 16px;
            margin-top: 4em;
        }
        .s2__mob-pic {
            margin-bottom: 4em;
        }
        @media (min-width: 768px) {
            .s2__mob-pic {
            margin-bottom: 0;
            }
        }
        
        .s2__mob-pic img {
            max-width: 100%;
        }
        .s2__des h1 {
            font-size: 2.6em;
            font-weight: bold;
            letter-spacing: 2.5px;
            font-size: 32px;
            font-family: 'DM Sans', sans-serif;
        }
        .s2__des .bold{
            font-weight: 700;
        }
        .s2__des p {
            font-weight: 100;
            font-size: 18px;
            line-height: 20px;
            line-height: 1.8;


            font-family: 'DM Sans', sans-serif;
        }
        .s2__des ul {
            font-weight: 100;
            font-size: .9em;
            letter-spacing: 1.5px;
            list-style: none;
            padding: 0;
        }
         .s2__list > li {
            padding: .5em 0;
        }
        .s2__list i {
            margin-right: 1em;
        }
        @media (min-width: 768px) {
            .flex-align {
                justify-content: center;
                align-items: center;
            }
        }
    
    `}</style>
  </section>
);
