import React from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { useMediaQuery } from "react-responsive";
import Result from "./Result";

const SearchPage = (props) => {
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
  const [queryResult, setQueryResult] = React.useState({ name: "", goto: "" });
  const [check, setCheck] = React.useState(0);
  const keywords = [
    {
      value: ["privacy policy", "privacy", "policy", "privacy and policy"],
      redirect: "/privacy-policy",
      desc:
        "Privacy Policy PRIVACY NOTICELast updated October 31, 2020 Thank you for choosing to be part of our community at METRIMEO (“Company“, “we“, “us“, “our“). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your …",
    },
    {
      value: ["home"],
      redirect: "/",
      desc:
        "Welcome to a new World! MetriMeo A World of Trust and financial progress Get Started!   We work hard so you can benefit from useful credit analytics When you partner with us, you’re trusting us with your future. So we take that responsibility to heart. We use a variety of proprietary tools to make sense …",
    },
    {
      value: ["about", "about us"],
      redirect: "/about",
      desc:
        "About Us Get to know who we are OUR STORY MetriMeo was founded early in 2014 with a mission to improve the economic outlook of people in the Sub-Saharan area. The vision emerged from the paradox that Africa is a continent with an extremely high development potential, near-infinite natural resources, a very young population (which …",
    },
    {
      value: ["our products", "products", "product"],
      redirect: "/our-products",
      desc:
        "Our products This is how we shape a new economy for individuals and businesses Join us! ScoreoTM Consumer Credit Reporting The core information that individuals willing to enter into credit agreement must have is a credit report from borrowers. Metrimeo calculates a consumer credit score through its product ScoreoTM for individuals through a complex algorithm developed …",
    },
    {
      value: ["to individuals", "individuals", "individual"],
      redirect: "/for-individuals",
      desc:
        "Individuals Numbers do matter for people. Metrimeo is helping individuals explore their future. Explore yours! Scoreo BasicTM Consumer credit Score We build and maintain trust among individuals and businesses to promote progress for everyone in the society. Scoreo BasicTM is a value indicator that measures how financially trustworthy you are at any point of time. …",
    },
    {
      value: ["to landlords", "landlords", "landlord"],
      redirect: "/for-landlords",
      desc:
        "Landlords Landlords need tenants they can entrust with their properties. Metrimeo is helping them make the right decision. Start today! There are various risks involved with leasing an apartment or house like ensuring that the new tenant is both creditworthy and trustworthy. Through our suite of products, we provide landlords and properties managers nationwide with …",
    },
    {
      value: ["to cooperatives", "cooperatives", "cooperative"],
      redirect: "/for-cooperatives",
      desc:
        "Cooperatives Trust and numbers do matter between cooperatives’ members. MetriMeo is helping them build it. Start here! There are various risks involved with leasing an apartment or house like ensuring that the new tenant is both creditworthy and trustworthy. Through our suite of products, we provide landlords and properties managers nationwide with the ability to …",
    },
    {
      value: ["to businesses", "businesses", "business"],
      redirect: "/for-businesses",
      desc:
        "Businesses Numbers do matter for Businesses. Metrimeo is helping businesses grow their potential. Join us! Corporate credit rating BusiMeo RatingTM ✓ Are you a Financial Institution? You want to lend money or partner with a local business, you now can do it with confidence using BusiMeo Rating. You will be able to access or request corporate …",
    },
    {
      value: ["terms", "conditions", "terms conditions", "terms & conditions"],
      redirect: "/terms-and-conditions",
      desc:
        "Terms & Conditions TERMS OF USELast updated October 31, 2020AGREEMENT TO TERMSThese Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and METRIMEO (“Company“, “we“, “us“, “our“), concerning your access to and use of the METRIMEO website as well as any other media form, …",
    },
    {
      value: ["login", "sign in", "signin"],
      redirect: "/login",
      desc:
        "Welcome Back! New to MetriMeo? Sign Up By continuing you accept our Terms & Conditions and Privacy Policy.",
    },
    {
      value: ["register", "sign up", "account", " create account"],
      redirect: "/register",
      desc:
        "Welcome to building trust and financial freedom Already signed up? Log In By signing up you agree to our Terms & Conditions and Privacy Policy.",
    },
    {
      value: ["forgot password", "forgot password?", "forgot", "password"],
      redirect: "/forgetpassword",
      desc: "Forgot Your Password? Don’t Worry!",
    },
    {
      value: ["security", "security practices"],
      redirect: "/security-practices",
      desc:
        "security practices We treat your data as if it was our own Your data security is a top priority at MetriMeo. Every day we thrive to ensure that our security is parallel with industry standards and compliance. Below is a breakdown of our security practices: Data Access We maintain a strict need to know basis …",
    },
  ];

  React.useEffect(() => {
    console.log("====================================");
    console.log(props.match.params.query);
    // setCheck(0);
    for (let i = 0; i < keywords.length; i++) {
      for (let j = 0; j < keywords[i].value.length; j++) {
        if (props.match.params.query == keywords[i].value[j]) {
          console.log(
            "MATCHED " +
              keywords[i].value[j] +
              " with " +
              props.match.params.query
          );
          setQueryResult({
            name: keywords[i].value[0],
            goto: keywords[i].redirect,
            desc: keywords[i].desc,
          });
          setCheck(1);
          break;
        }
      }
    }
  }, []);
  return (
    <Container>
      <div
        style={{
          backgroundColor: "#eeeeee",
          // margin: "30px",
          padding: isTabletOrMobile ? "0px" : "40px",
        }}
      >
        <div
          style={{
            fontFamily: "'Montserrat',sans-serif",
            fontSize: isTabletOrMobile ? "25px" : "2.6666666666667rem",
            fontWeight: "800",
            color: "#e05414",
            backgroundColor: "#eeeeee",
            padding: isTabletOrMobile ? "0px" : "40px",
            // margin: "30px",
          }}
        >
          Search Results For: {props.match.params.query}
        </div>

        {check == 0 ? (
          <div
            style={{
              backgroundColor: "#ffff",
              // margin: "30px",
              padding: isTabletOrMobile ? "10px" : "40px",
            }}
          >
            <div>
              Sorry, but nothing matched your search terms. Please try again
              with some different keywords.
            </div>
            <div> Other suggestions are: </div>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#ffff",

              padding: isTabletOrMobile ? "10px" : "40px 40px 0px 40px",
            }}
          >
            <div>
              <Result
                name={queryResult.name}
                goto={queryResult.goto}
                desc={queryResult.desc}
              />
            </div>
          </div>
        )}
        <div
          style={{
            backgroundColor: "#ffff",
            // margin: "30px",
            padding: isTabletOrMobile ? "10px" : "40px",
          }}
        >
          {keywords.map((item, index) => {
            return queryResult.goto != item.redirect ? (
              <Result
                key={index}
                name={item.value[0]}
                goto={item.redirect}
                desc={item.desc}
              />
            ) : (
              <></>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default SearchPage;
