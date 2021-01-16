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

const AppHero = (props) => (
  <Card>
    <Hero
      color="white"
      bg="purple"
      //   backgroundImage="https://source.unsplash.com/CQB5J0hZC5U/1600x900"
    >
      <Flex flexWrap="wrap" alignItems="center">
        <Flex alignItems="flex-start" width={[1, 1 / 2]} p={3}>
          {/* <Phone
            src="https://via.placeholder.com/187x406"
            notch
            style={{ transform: "translate(32px, 64px)" }}
          /> */}
          <Phone
            src="https://via.placeholder.com/205x412"
            style={{ transform: "translate(32px, 0px)" }}
          />
          <Phone
            src="https://via.placeholder.com/205x412"
            color="white"
            style={{ transform: "translate(-32px, 0px)" }}
          />
        </Flex>
        <Flex
          width={[1, 1 / 2]}
          alignItems="center"
          flexDirection="column"
          p={3}
        >
          <Heading>Mobile App</Heading>
          <Subhead fontSize={[2, 3]}>2 Screenshots & links</Subhead>
          <Flex mt={3} flexWrap="wrap" justifyContent="center">
            {/* <Button_ANDROID /> */}
            <Button_IOS />
          </Flex>
          <Flex mt={3} flexWrap="wrap" justifyContent="center">
            <Button_ANDROID />
            {/* <Button_IOS /> */}
          </Flex>
        </Flex>
      </Flex>
      <ScrollDownIndicator />
    </Hero>
  </Card>
);
export default AppHero;
