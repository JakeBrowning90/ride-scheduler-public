import React, { useState } from "react";
import { apiSource } from "../apiSource";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function FormScreen(
  {
    // Props
  }
) {
  // State declarations
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [passengerCt, setPassengerCt] = useState(1);
  const [hasLuggage, setHasLuggage] = useState(false);
  const [notes, setNotes] = useState("");
  const [rideSubmitError, setRideSubmitError] = useState([]);

  // Functions
  const navigate = useNavigate();

  const handleClientName = (e) => {
    setClientName(e.target.value);
  };
  const handleClientPhone = (e) => {
    setClientPhone(e.target.value);
  };
  const handlePickUpLocation = (e) => {
    setPickUpLocation(e.target.value);
  };
  const handlePickUpTime = (e) => {
    setPickUpTime(e.target.value);
  };
  const handleDropOffLocation = (e) => {
    setDropOffLocation(e.target.value);
  };
  const handlePassengerCt = (e) => {
    setPassengerCt(e.target.value);
  };
  const handleHasLuggage = (e) => {
    setHasLuggage(e.target.value);
  };
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  async function submitRequest(e) {
    e.preventDefault();
    console.log(pickUpTime);
    const response = await fetch(apiSource + "ride", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientName: clientName,
        clientPhone: clientPhone,
        pickUpLocation: pickUpLocation,
        pickUpTime: pickUpTime,
        dropOffLocation: dropOffLocation,
        passengerCt: passengerCt,
        hasLuggage: hasLuggage,
        notes: notes,
      }),
    });
    const newRideResponse = await response.json();
    if (Array.isArray(newRideResponse.errors)) {
      setRideSubmitError(newRideResponse.errors);
    } else {
      navigate("/success");
    }
  }

  // Render
  return (
    <div>
      <p>Request form</p>
      <form onSubmit={submitRequest}>
        {/* TODO: Add input attributes */}

        <TextField
          label="Name"
          variant="filled"
          type="text"
          name="clientName"
          id="clientName"
          value={clientName}
          onChange={handleClientName}
          required
        />
        <TextField
          label="Phone number"
          variant="filled"
          type="tel"
          name="clientPhone"
          id="clientPhone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={clientPhone}
          onChange={handleClientPhone}
          required
        />
        <TextField
          label="Pick-up Location"
          variant="filled"
          type="text"
          name="pickUpLocation"
          id="pickUpLocation"
          value={pickUpLocation}
          onChange={handlePickUpLocation}
          required
        />
        <label htmlFor="pickUpTime">Pick-up time:</label>
        <input
          type="datetime-local"
          name="pickUpTime"
          id="pickUpTime"
          value={pickUpTime}
          onChange={handlePickUpTime}
          required
        />
        <label htmlFor="dropOffLocation">Drop-off location:</label>
        <input
          type="text"
          name="dropOffLocation"
          id="dropOffLocation"
          value={dropOffLocation}
          onChange={handleDropOffLocation}
          required
        />
        <label htmlFor="">Passenger count:</label>
        <input
          type="number"
          name="passengerCt"
          id="passengerCt"
          value={passengerCt}
          onChange={handlePassengerCt}
          required
        />
        <label htmlFor="hasLuggage">Extra Luggage:</label>
        <input
          type="checkbox"
          name="hasLuggage"
          id="hasLuggage"
          value={hasLuggage}
          onChange={handleHasLuggage}
        />
        <label htmlFor="notes">Additional notes:</label>
        <textarea
          name="notes"
          id="notes"
          value={notes}
          onChange={handleNotes}
        />
        <Button variant="contained">Submit</Button>
        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}

export default FormScreen;
