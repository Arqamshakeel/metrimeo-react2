import MobileStoreButton from "react-mobile-store-button";
import React from "react";
////

export default class Button_IOS extends React.Component {
  render() {
    const iOSUrl =
      "https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8";
    return (
      <div>
        <MobileStoreButton
          //   width="200px"
          //   height="50px"
          store="ios"
          url={iOSUrl}
          //   width={200}
          //   height={200}
          linkProps={{ title: "iOS Store Button" }}
        />
      </div>
    );
  }
}
