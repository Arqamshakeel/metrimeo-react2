import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import { render } from "react-dom";

const CustomFooter = () => {
  return (
    <Footer
      columns={[
        {
          title: "Company Info",
          items: [
            { title: "About" },
            { title: "Our Products" },
            { title: "Careers" },
            { title: "Terms and conditions" },
            { title: "Privacy and policy" },
            { title: "Security" },
          ],
          url: "https://yuque.com",
          description: "hellosdnfljdashjfldjlf",
          openExternal: true,
        },
        {
          title: "Resources",
          items: [
            { title: "About" },
            { title: "Our Products" },
            { title: "Careers" },
            { title: "Terms and conditions" },
            { title: "Privacy and policy" },
            { title: "Security" },
          ],
          url: "https://yuque.com",
          description: "hellosdnfljdashjfldjlf",
          openExternal: true,
        },
        {
          title: "Our Solutions",
          items: [
            { title: "About" },
            { title: "Our Products" },
            { title: "Careers" },
            { title: "Terms and conditions" },
            { title: "Privacy and policy" },
            { title: "Security" },
          ],
          url: "https://yuque.com",
          description: "hellosdnfljdashjfldjlf",
          openExternal: true,
        },
      ]}
      bottom="Made with ❤️ by ARQAM SHAKEEL"
    />
  );
};
export default CustomFooter;
