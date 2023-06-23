// TODO: answer here
import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Button, Box, Text, AbsoluteCenter } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box bgColor="bgColor.baseBg" minHeight="100vh" minWidth="127px">
        <Text
          alignItems="flex-start"
          padding="20px"
          bgColor="bgColor.baseBgNavbarFoot"
          color="textColor.baseText"
        >
          <h1>Home Page</h1>
        </Text>
        <AbsoluteCenter position="relative">
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
        </AbsoluteCenter>
        <Footer />
      </Box>
    </>
  ); // TODO: replace this
};

export default Home;
