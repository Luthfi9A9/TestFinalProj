// TODO: answer here
import { Link, Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    // TODO: answer here
    <Box bgColor="bgColor.baseBgNavbarFoot">
      <h1>
        <Link
          onClick={() => {
            navigate("/");
          }}
          data-testid="home-page"
          color="textColor.baseButton"
          bgColor="bgColor.baseBgButton"
        >
          Student Portal
        </Link>
      </h1>
      <ul>
        <li>
          <Link
            onClick={() => {
              navigate("/student");
            }}
            data-testid="student-page"
            color="textColor.baseButton"
            bgColor="bgColor.baseBgButton"
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
            color="textColor.baseButton"
            bgColor="bgColor.baseBgButton"
          >
            Add Student
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default NavBar;
