// TODO: answer here
import { Link, Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    // TODO: answer here
    <Box bgColor="bgColor.baseBgNavbarFoot" padding={3}>
      <Flex>
        <h1>
          <Link
            onClick={() => {
              navigate("/");
            }}
            data-testid="home-page"
            color="textColor.baseText"
            as="b"
          >
            Student Portal
          </Link>
        </h1>
        <Spacer />
        <ul>
          <li>
            <Link
              onClick={() => {
                navigate("/student");
              }}
              data-testid="student-page"
              color="textColor.baseText"
              as="b"
            >
              All Student
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                navigate("/add");
              }}
              data-testid="add-page"
              color="textColor.baseText"
              as="b"
            >
              Add Student
            </Link>
          </li>
        </ul>
      </Flex>
    </Box>
  );
};

export default NavBar;
