import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";

const HomePage=()=>{
  return (
    <Box>
      <Navbar></Navbar>
    </Box>
  );
};

export default HomePage;