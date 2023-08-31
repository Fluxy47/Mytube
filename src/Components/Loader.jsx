import React from "react";
import { Triangle } from "react-loader-spinner";
import { Box } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Triangle
        height="120"
        width="120"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
}

export default Loader;
