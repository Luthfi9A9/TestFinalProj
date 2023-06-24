// TODO: answer here
import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Text,
  AbsoluteCenter,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box bgColor="bgColor.baseBg" minHeight="100vh" minWidth="127px">
        <Flex flexDirection="column" minHeight="100vh">
          <Flex
            justifyContent="center"
            p={4}
            bgColor="bgColor.baseBgNavbarFoot"
          >
            <Text color="textColor.baseText" as="b">
              <h1>Home Page</h1>
            </Text>
          </Flex>
          <Flex flex={1} justifyContent="center" alignItems="center">
            <Button
              onClick={() => {
                navigate("/student");
              }}
              data-testid="student-btn"
              bgColor="bgColor.baseBgButton"
              color="textColor.baseButton"
              variant="solid"
            >
              All Student
            </Button>
          </Flex>
          <Footer />
        </Flex>
      </Box>
    </>
  ); // TODO: replace this
};

export default Home;
