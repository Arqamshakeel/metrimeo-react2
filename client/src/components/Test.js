import React from "react";
const Test = () => {
  React.useEffect(() => {
    window.location.replace("index-0.htm");
  }, []);
  return <div></div>;
};

export default Test;
