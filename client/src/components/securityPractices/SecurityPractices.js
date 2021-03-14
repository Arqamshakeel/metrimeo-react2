import React from "react";
import ThreeGridSecurity from "../pageComponents/ThreeGridSecurity";
import { useMediaQuery } from "react-responsive";
const SecurityPractices = () => {
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
    <div>
      <ThreeGridSecurity
        headingShow={"hello"}
        image1={"./wp-content/uploads/2020/12/key.png"}
        data1Heading={"Data Access"}
        data1sub={[
          "We maintain a strict need to know basis for access to ",
          // !isTabletOrMobile ? <br /> : <></>,
          "your data. Also, access to your credit score and/or ",
          // !isTabletOrMobile ? <br /> : <></>,
          "report are only provided after your approval.",
          isTabletOrMobile ? (
            <div>
              <br /> <br />
            </div>
          ) : (
            <></>
          ),
        ]}
        image2={"./wp-content/uploads/2020/12/transmission.png"}
        data2Heading={"Data Transmission"}
        data2sub={[
          "We use the standard 128-bit encryption to protect the ",
          // !isTabletOrMobile ? <br /> : <></>,
          "transmission of your data on our site.",
          isTabletOrMobile ? (
            <div>
              <br /> <br />
            </div>
          ) : (
            <></>
          ),
        ]}
        image3={"./wp-content/uploads/2020/12/credit-card.png"}
        data3Heading={"Customer Payment Information"}
        data3sub={[
          "MetriMeo uses secured external third party payment ",
          // !isTabletOrMobile ? <br /> : <></>,
          "processing services and does not process, store or ",
          // !isTabletOrMobile ? <br /> : <></>,
          "transmit any payment card data.",
          isTabletOrMobile ? (
            <div>
              <br /> <br />
            </div>
          ) : (
            <></>
          ),
        ]}
        desc={
          "MetriMeo provides a fast and effective screening (background check) Service to clients who need to verify an applicant’s details. The verification process primarily discerns any fraudulent applications to ensure that the client gets certified information and makes the correct hiring decision. "
        }
        heading={"VeriMeo"}
        superLative={"TM"}
        subHeading={"Application Screening"}
        backgroundColor={"#FFFF"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
      />
      <ThreeGridSecurity
        image1={"./wp-content/uploads/2020/12/server.png"}
        data1Heading={"Physical Security"}
        data1sub={[
          "MetriMeo leverages Amazon AWS for its data centers ",
          // !isTabletOrMobile ? <br /> : <></>,
          "AWS has several years of experience in designing, ",
          // !isTabletOrMobile ? <br /> : <></>,
          "constructing and operating state of the art data centers. ",
          // !isTabletOrMobile ? <br /> : <></>,
          "Also the production network is logically isolated from ",
          // !isTabletOrMobile ? <br /> : <></>,
          "other networks such as QA, and Development.",
          isTabletOrMobile ? (
            <div>
              <br /> <br />
            </div>
          ) : (
            <></>
          ),
        ]}
        image2={"./wp-content/uploads/2020/12/code.png"}
        data2Heading={"Coding And Testing Practices"}
        data2sub={[
          "We leverage industry standard programming",
          // !isTabletOrMobile ? <br /> : <></>,
          " techniques such as having a documented",
          // !isTabletOrMobile ? <br /> : <></>,
          "development and quality assurance processes to",
          // !isTabletOrMobile ? <br /> : <></>,
          " ensure that we meet security standards.",
          isTabletOrMobile ? (
            <div>
              <br /> <br />
            </div>
          ) : (
            <></>
          ),
        ]}
        image3={"./wp-content/uploads/2020/12/employee.png"}
        data3Heading={"Employee Access"}
        data3sub={[
          "We follow the principle of least privilege in how we ",
          // !isTabletOrMobile ? <br /> : <></>,
          "grant access to your data to our employees to use in ",
          // !isTabletOrMobile ? <br /> : <></>,
          "the diagnosing and resolving of incidents as well as ",
          // !isTabletOrMobile ? <br /> : <></>,
          "to responding to customer support requests.",
          isTabletOrMobile ? (
            <div>
              <br /> <br />
            </div>
          ) : (
            <></>
          ),
        ]}
        desc={
          "MetriMeo provides a fast and effective screening (background check) Service to clients who need to verify an applicant’s details. The verification process primarily discerns any fraudulent applications to ensure that the client gets certified information and makes the correct hiring decision. "
        }
        heading={"VeriMeo"}
        superLative={"TM"}
        subHeading={"Application Screening"}
        backgroundColor={"#FFFF"}
        buttonColor={"#186eb8"}
        buttonTextColor={"white"}
      />
    </div>
  );
};

export default SecurityPractices;
