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
            <h1>Our Guarantee to you</h1>
            <hr />
            <h4>Materio</h4>
          </div>
          <div class="owl-carousel owl-theme">
            <div>
              <img
                src="https://www.metrimeo.com/wp-content/uploads/2020/10/4421964-1024x1024.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.metrimeo.com/wp-content/uploads/2020/10/5204685-1024x1024.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.metrimeo.com/wp-content/uploads/2020/10/2149568-1024x1024.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.metrimeo.com/wp-content/uploads/2020/10/3857457-1024x1024.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.metrimeo.com/wp-content/uploads/2020/10/5204685-1024x1024.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.metrimeo.com/wp-content/uploads/2020/10/2149568-1024x1024.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>

        <style>
          {`
           .s4 {
               font-size: 16px;
               margin-top: 10em;
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
