import React from "react";
import { Link } from "react-router";
import Box from "@mui/material/Box";

// import apiSource

function ConfirmScreen(
  {
    // Props
  }
) {
  // State declarations
  // Functions
  // Render
  return (
    <Box className="resultMessage">
      <p>Request received, we'll follow up shortly. Thanks!</p>
      <Link to={"/"}>Back to Request Form</Link>
    </Box>
  );
}

export default ConfirmScreen;
