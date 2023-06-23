// TODO: answer here
import { useNavigate } from "react-router-dom";
import { Button, AbsoluteCenter, Box } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();
  const btnBack = () => {
    navigate(-1);
  };
  return (
    <>
      {/* TODO: answer here */}
      <Box textAlign="center" color="textColor.baseText">
        <h1>404 | Not Found</h1>
        <Button
          data-testid="back"
          onClick={btnBack}
          color="textColor.baseButton"
          bgColor="bgColor.baseBgButton"
        >
          Back
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
