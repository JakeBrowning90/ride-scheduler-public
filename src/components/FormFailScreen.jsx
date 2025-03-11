import React from "react";
import { Link } from "react-router";
// import apiSource

function FormFailScreen(
  {
    // Props
  }
) {
  // State declarations
  // Functions
  // Render
  return (
    <div>
      <p>Submission failed, please try again later.</p>
      <Link to={"/"}>Back to Request Form</Link>
    </div>
  );
}

export default FormFailScreen;
