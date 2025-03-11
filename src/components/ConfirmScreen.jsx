import React from "react";
import { Link } from "react-router";

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
    <div>
      <p>Request received, we'll follow up shortly. Thanks!</p>
      <Link to={"/"}>Back to Request Form</Link>
    </div>
  );
}

export default ConfirmScreen;
