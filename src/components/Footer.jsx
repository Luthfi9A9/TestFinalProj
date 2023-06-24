// TODO: answer here
import { Box, Grid, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    // TODO: answer here
    <Box
      className="footer"
      bgColor="bgColor.baseBgNavbarFoot"
      // position="fixed"
      right="0"
      left="0"
      bottom="0"
      padding="6px"
    >
      <Text textAlign="center" color="textColor.baseText" as="b">
        <p className="studentName">Luthfi Alwan Azhari</p>
      </Text>
      <Text textAlign="center" color="textColor.baseText" as="b">
        <p className="studentId">FE4881660</p>
      </Text>
    </Box>
  );
};

export default Footer;
