import React from "react";
import { Card, Heading, Flex } from "rebass";
import {
  Hero,
  CallToAction,
  ScrollDownIndicator,
  Subhead,
} from "react-landing-page";
import Phone from "react-landing-page/dist/visuals/Phone";
import Button_IOS from "../storeButtons/Button_IOS";
import Button_ANDROID from "../storeButtons/Button_ANDROID";
import Laptop from "react-landing-page/dist/visuals/Laptop";

const LaptopHero = (props) => (
  <Card>
    <Hero color="black" bg="pink">
      <Heading>Laptop App</Heading>
      <Subhead fontSize={[2, 3]}>Screenshot & Download link</Subhead>
      <CallToAction mt={3} bg="hotpink">
        Get it
      </CallToAction>
      <Laptop mt={3} />
      <ScrollDownIndicator />
    </Hero>
  </Card>
);
export default LaptopHero;
