import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// import { Form } from "react-router-dom";
import Form from "./Form.jsx";
export default function LoginPage() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          // color="primary"
          sx={{
            "&:hover": {
              // color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Friendify
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" varient="h5" sx={{mb:"1.5rem"}}>
          Welcome to Friendify,the social Media for Sociopaths!
        </Typography>
        <Form></Form>
      </Box>
    </Box>
  );
}
