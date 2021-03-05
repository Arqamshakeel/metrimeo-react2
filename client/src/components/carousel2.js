import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { Container } from "reactstrap";
const $ = window.jQuery;
// import $ from "jquery";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
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
        992: { items: 3 },
      },
    });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    console.log(this.state.width);
    return (
      <section className="s4">
        <Container>
          <div class="owl-carousel owl-theme">
            <div>
              <img
                src="./wp-content/uploads/2020/12/AWS-logo-removebg-preview.png"
                alt=""
              />
            </div>

            <div>
              <img
                src="./wp-content/uploads/2020/12/google-logo-png-hd-11.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="./wp-content/uploads/2020/12/cloudflare-logo.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="./wp-content/uploads/2020/12/AWS-logo-removebg-preview.png"
                alt=""
              />
            </div>

            <div>
              <img
                src="./wp-content/uploads/2020/12/google-logo-png-hd-11.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="./wp-content/uploads/2020/12/cloudflare-logo.png"
                alt=""
              />
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
