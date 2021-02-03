import React, { Component } from "react";
import { Container } from "reactstrap";
const $ = window.jQuery;
// import $ from "jquery";
export default class extends Component {
  componentDidMount() {
    $(".owl-carousel").owlCarousel({
      items: 4,
      autoplay: true,
      loop: true,
      margin: 30,
      dots: true,
      responsiveClass: true,
      responsive: {
        320: { items: 1 },
        480: { items: 2 },
        600: { items: 2 },
        767: { items: 3 },
        768: { items: 3 },
        992: { items: 4 },
      },
    });
  }

  render() {
    return (
      <section className="s4">
        <Container>
          <div className="s4__titles">
            <hr
              style={{
                border: "1px solid #e05414",
                margin: "20px 80px 0px 80px",
              }}
            />
            <h1>Our Guarantee to you</h1>
            <hr
              style={{
                border: "1px solid #e05414",
                margin: "0px 80px 0px 80px",
              }}
            />
          </div>
          <div class="owl-carousel owl-theme">
            <div>
              <img
                src="./wp-content/uploads/2020/10/4421964-1024x1024.jpg"
                alt=""
              />
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: "800",
                }}
              >
                Extremely Accurate Models
              </h5>
            </div>

            <div>
              <img
                src="./wp-content/uploads/2020/10/5204685-1024x1024.jpg"
                alt=""
              />

              <h5
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: "800",
                }}
              >
                Highest Standards Of Security
              </h5>
            </div>
            <div>
              <img
                src="./wp-content/uploads/2020/10/2149568-1024x1024.jpg"
                alt=""
              />
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: "800",
                }}
              >
                Data Privacy Integrated By Design
              </h5>
            </div>
            <div>
              <img
                src="./wp-content/uploads/2020/10/3857457-1024x1024.jpg"
                alt=""
              />
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: "800",
                }}
              >
                Innovative And Most Cost-Effective Solutions
              </h5>
            </div>
            <div>
              <img
                src="./wp-content/uploads/2020/10/4421964-1024x1024.jpg"
                alt=""
              />
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: "800",
                }}
              >
                Extremely Accurate Models
              </h5>
            </div>

            <div>
              <img
                src="./wp-content/uploads/2020/10/5204685-1024x1024.jpg"
                alt=""
              />

              <h5
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: "800",
                }}
              >
                Highest Standards Of Security
              </h5>
            </div>
            <div>
              <img
                src="./wp-content/uploads/2020/10/2149568-1024x1024.jpg"
                alt=""
              />
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: "800",
                }}
              >
                Data Privacy Integrated By Design
              </h5>
            </div>
            <div>
              <img
                src="./wp-content/uploads/2020/10/3857457-1024x1024.jpg"
                alt=""
              />
              <h5
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontFamily: "'Montserrat',sans-serif",
                  fontWeight: "800",
                }}
              >
                Innovative And Most Cost-Effective Solutions
              </h5>
            </div>
          </div>
        </Container>

        <style>
          {`
           .s4 {
               font-size: 16px;
               margin-top: 2em;
           }
           .s4__titles {
               margin-bottom: 4em;
               text-align: center;
           }
           .s4__titles h1 {
               
               font-weight: 300;
               text-transform: capitalize;
               letter-spacing: 1px;
               font-family: 'Open Sans',sans-serif;

               font-size: 3.125em;
           }
           .s4__titles h4 {
               font-size: .9em;
               font-weight: 100;
               margin-top: 2em;
               color: #949090;
           }
            .owl-dots .owl-dot {
                outline: none;
            }
            .owl-dots .owl-dot.active span, .owl-dots .owl-dot:hover span {
                background: hsl(108, 47%, 57%) !important;
            }
            
            `}
        </style>
      </section>
    );
  }
}
