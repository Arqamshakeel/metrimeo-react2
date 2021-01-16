import React from "react";
import { Container, Row, Col } from "reactstrap";
import AppHero from "./hero/AppHero";
import LaptopHero from "./hero/LaptopHero";

export default () => {
  return (
    <section className="s1">
      <Container>
        <Row>
          <Col md="12" className="text-center s1-intro">
            <h1>Our Products</h1>
            <h3>
              This is how we shape a new economy for individuals and businesses
            </h3>
          </Col>

          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              // className="s1-avatar"
              src="https://www.metrimeo.com/wp-content/uploads/2020/10/credit-score-scale-showing-good-value-illustration_100456-1427-removebg-preview.png"
              alt=""
              width="200"
            />
            <h3>Consumer Credit Reporting</h3>
            <p>
              {"The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product ScoreoTM for individuals through a complex algorithm developed by the company. These credit reports are generated and accessed via our systems using unique keys assigned to each potential borrower. They will provide and excellent overview to lenders and help them decide whether to extend a credit line or not.".substring(
                0,
                100
              ) + "..."}
            </p>
            <a href="">read more</a>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              // className="s1-avatar"
              src="https://www.metrimeo.com/wp-content/uploads/2020/12/235-removebg-preview1.png"
              alt=""
              width="200"
            />
            <h3>user friendly interface</h3>
            <p>
              {"We built an artificial intelligence solution that performs in-depth verification and allows companies to tremendously lower risk on their potential investments. This is to provide a perspective to local and international investors willing to enter a new market or partnership. Our Business Rating is ideal for organizations eager to acquire trade references on other companies that they would like to venture with. Our Business report and screening will evaluate companies’ activities and operations that are critical for their successes.".substring(
                0,
                100
              ) + "..."}
              }
            </p>
            <a href="">read more</a>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              // className="s1-avatar"
              src="https://www.metrimeo.com/wp-content/uploads/2020/12/online-form-survey-quiz-voting-document-with-stamp-pc-computer_101884-353__1_-removebg-preview.png"
              alt=""
              width="200"
            />
            <h3>Build the app everyone love</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <a href="">read more</a>
          </Col>
          <Col md="12" className="text-center s1-intro">
            {/* <AppHero /> */}
            <LaptopHero />
          </Col>
          <Col md="12" className="text-center s1-intro">
            <AppHero />
            {/* <LaptopHero /> */}
          </Col>
        </Row>
      </Container>
      <style>
        {`
        .s1 {
            font-size: 16px;
        }
        .s1-intro {
            margin-bottom: 2em;
        }
        .s1-intro h1 {
            font-size: 3em;
            font-weight: 100;
        }
        .s1-intro h3 {
            font-size: 1em;
            font-weight: 200;
            margin-top: 1em;
        }
        .s1-avatar {
            width: 60px;
        }
        
        .s1-advice {
            padding: 2em;
            transition: all .5s;
        }
        .s1-advice:hover {
            box-shadow: #f2f0f0 1px 1px 10px, #f2ecec9c 1px 1px 10px;
        }
        .s1-advice h3 {
            font-size: 1.1em;
            margin-top: 2em;
            letter-spacing: 2px;
        }
        .s1-advice p {
            margin-top: 2em;
            font-size: .95em;
            line-height: 2;
            color: dimgray;
        }
        .s1-advice a {
            font-size: .95em;
            text-decoration: none;
            color: hsl(120, 2%, 34%);
            transition: all .5s;
        }
        .s1-advice a:hover {
            color: var(--brand-color);
        }
        
        `}
      </style>
    </section>
  );
};
