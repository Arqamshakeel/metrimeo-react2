import React from "react";
import { Container, Jumbotron } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router";
import userService from "../services/UserService";
const Header = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 700px)",
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <header>
      {/* <div
        className={isDesktopOrLaptop ? "intro-logo" : "intro-logo-mobile"}
        style={{
          backgroundImage:
            "url(https://www.metrimeo.com/wp-content/uploads/2020/11/Modern-architecture-building.jpg)",
          backgroundPosition: "center",
        }}
      >
        <h2 className={isDesktopOrLaptop ? "data1" : "data1-mobile"}>
          Welcome to a new <br /> World!
        </h2>

        <h2 className={isDesktopOrLaptop ? "data4" : "data4-mobile"}>
          MetriMeo
        </h2>
        <span className="elementor-divider-separator data5"></span>
        <h2 className={isDesktopOrLaptop ? "data2" : "data1-mobile"}>
          A World of Trust and <br /> financial progress
        </h2>
        <img
          src="https://bootstrapmade.com/demo/themes/eStartup/img/hero-img.png"
          className=""
          alt=""
        />
        <div
          className={isDesktopOrLaptop ? "intro-button data3" : "intro-button"}
        >
          <a href="">Get Started!</a>
        </div>
      </div> */}

      <div
        style={{
          backgroundImage:
            "url(./wp-content/uploads/2020/11/Modern-architecture-building.jpg)",
          backgroundPosition: isTabletOrMobile
            ? "right 65% bottom 78%"
            : "right 35% bottom 68%",
          padding: isTabletOrMobileDevice ? "0px" : "100px",
        }}
      >
        <Grid container>
          <Grid
            item
            lg={6}
            xs={12}
            style={{ margin: isTabletOrMobile ? "30px 20px 20px 20px" : "0px" }}
          >
            <br />
            <span className={isDesktopOrLaptop ? "data1" : "data1-mobile"}>
              <h2 className="backgroundColorProperties">Welcome to a new</h2>{" "}
              <br />
              <h2 className="backgroundColorProperties">World!</h2> <br />
            </span>
            <br />

            <h2 className={isTabletOrMobile ? "data4-mobile" : "data4"}>
              MetriMeo
            </h2>
            <br />
            <div>
              <div className="elementor-divider-separator data5"></div>
              <br />
            </div>
            <br />

            <span className={isDesktopOrLaptop ? "data1" : "data1-mobile"}>
              <h2 className="backgroundColorProperties">
                A World of Trust and
              </h2>
              <br />
              <h2 className="backgroundColorProperties">financial progress</h2>
              <br />
            </span>
            <br />

            <div
              className={
                isDesktopOrLaptop ? "intro-button data3" : "intro-button"
              }
            >
              <a
                href=""
                onClick={() => {
                  if (userService.getloggedinuser()) {
                    props.history.push(
                      props.loggedin ? props.loggedin : "/dashboard"
                    );
                  } else {
                    props.history.push(
                      props.notloggedin ? props.notloggedin : "/register"
                    );
                  }
                }}
                href=""
              >
                Get Started!
              </a>
            </div>
            <br />
          </Grid>
          {/* <Grid item xs={2}></Grid>
          <Grid item xs={4}></Grid> */}
        </Grid>
      </div>

      <style jsx>{`
        header {
          // margin-bottom: 1rem;
          // height: 100vh;
        }
        .elementor-divider-separator {
          width: 50px;
          margin: 0 auto;
          margin-left: 0;
          border-top: 4.5px solid #e05414;
        }

        .intro-logo {
          display: flex;
          // position: absolute;
          // top: 5em;
          // bottom: 0;
          // left: 0;
          // right: 0;
          flex-direction: column;
          // justify-content: space-evenly;
          // align-items: center;
          // text-align: center;
          // align-items: flex-start;
          // align-items: baseline;
        }
        .data1 {
          order: 1;
          // align-self: flex-start;
          // margin: 100px;

          font-size: 45px;
          text-transform: none;
          white-space: normal;
          // background-color: rgba(251, 252, 252, 0.66);
          color: #e06219;
          // flex: 0 0 auto;
          width: auto;
          // width: 30%;

          font-style: normal;

          color: #e06219;
          text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
          // font-size: 31px;
          // font-style: normal;
          margin-bottom: 30px;

          // text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
        }
        .backgroundColorProperties {
          font-size: ${isTabletOrMobile ? "35px" : "45px"};
          text-transform: none;
          white-space: normal;
          background-color: rgba(251, 252, 252, 0.66);
          color: #e06219;
          color: #e06219;
          text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
          display: inline-block;
        }
        .data1-mobile {
          font-size: 30px;
          text-transform: none;
          white-space: normal;
          // background-color: rgba(251, 252, 252, 0.66);
          color: #e06219;

          font-style: normal;

          color: #e06219;
          text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
          // font-size: 31px;
          // font-style: normal;
          margin-bottom: 0px;
          // text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
        }
        .data2 {
          order: 4;
          // margin-left: 100px;

          font-size: 45px;
          text-transform: none;
          white-space: normal;
          background-color: rgba(251, 252, 252, 0.66);
          color: #e06219;
          flex: 0 0 auto;
          width: 35%;

          font-style: normal;

          color: #e06219;
          text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
          margin-top: 30px;
        }
        .data3 {
          order: 5;
          // margin-left: 100px;
          flex: 0 0 auto;
          width: 35%;
        }
        .data5 {
          order: 3;
          // margin-left: 100px;
          flex: 0 0 auto;
          width: 50px;
        }
        .data4 {
          font-family: "Montserrat", sans-serif;
          font-weight: 800;
          font-size: 80px;
          text-transform: capitalize;
          order: 2;

          // margin-left: 100px;
          flex: 0 0 auto;
          width: 35%;
          font-style: inherit;

          color: #ffffff;
          text-shadow: 0px 0px 24px rgba(0, 0, 0, 0.3);
        }
        .data4-mobile {
          font-family: "Montserrat", sans-serif;
          font-weight: 800;
          font-size: 60px;

          color: #ffffff;
          text-shadow: 0px 0px 24px rgba(0, 0, 0, 0.4);
        }
        .intro-logo-mobile {
          display: flex;
          // position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        }

        .intro-logo h1 {
          font-size: 1.8em;
          font-weight: 900;
          font-family: "Philosopher", sans-serif;
          color: var(--brand-color);
        }
        @media (min-width: 768px) {
          .intro-logo h1 {
            font-size: 3.5em;
          }
        }
        .intro-logo h3 {
          font-size: 1rem;
          font-weight: 300;
          color: var(--gray-color-1);
          margin-bottom: 3em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
        .company-icons__item + .company-icons__item {
          margin-left: 1rem;
        }
        @media (min-width: 575px) {
          .company-icons__item + .company-icons__item {
            margin-left: 2rem;
          }
        }
        .company-icons__item i {
          margin-right: 5px;
        }
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
        }
        .intro-button a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: white;
          font-size: 16px;

          background: #186eb8;
          transition: all 0.5s;
        }
        .intro-button a:hover {
          background-color: #186eb8;
          color: white;
        }

        .company-icons {
          color: var(--gray-color-2);
          font-size: 0.95em;
        }
        .company-icons__item {
          transition: all 0.5s;
        }
        .company-icons__item:hover {
          color: var(--brand-color);
          cursor: pointer;
        }
      `}</style>
    </header>
  );
};

export default withRouter(Header);
