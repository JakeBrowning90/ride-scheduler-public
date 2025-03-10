import React, { useState } from "react";
// import apiSource

function FormScreen(
  {
    // Props
  }
) {
  // State declarations
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupLoc, setPickupLoc] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffLoc, setDropoffLoc] = useState("");
  const [passengerCt, setPassengerCt] = useState(1);
  const [luggage, setLuggage] = useState(false);
  const [notes, setNotes] = useState("");

  // Functions
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handlePickupLoc = (e) => {
    setPickupLoc(e.target.value);
  };
  const handlePickupTime = (e) => {
    setPickupTime(e.target.value);
  };
  const handleDropoffLoc = (e) => {
    setDropoffLoc(e.target.value);
  };
  const handlePassengerCt = (e) => {
    setPassengerCt(e.target.value);
  };
  const handleLuggage = (e) => {
    setLuggage(e.target.value);
  };
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  async function submitRequest(e) {
    e.preventDefault();
    console.log(name);
    console.log(phone);
    console.log(pickupLoc);
    console.log(pickupTime);
    console.log(dropoffLoc);
    console.log(passengerCt);
    console.log(luggage);
    console.log(notes);
  }

  // Render
  return (
    <div>
      <p>Request form</p>
      <form onSubmit={submitRequest}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />
        <label htmlFor="">Phone number:</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={handlePhone}
        />
        <label htmlFor="">Pick-up location:</label>
        <input
          type="text"
          name="pickupLoc"
          id="pickupLoc"
          value={pickupLoc}
          onChange={handlePickupLoc}
        />
        <label htmlFor="">Pick-up time:</label>
        <input
          type="datetime-local"
          name="pickupTime"
          id="pickupTime"
          value={pickupTime}
          onChange={handlePickupTime}
        />
        <label htmlFor="">Drop-off location:</label>
        <input
          type="text"
          name="dropoffLoc"
          id="dropoffLoc"
          value={dropoffLoc}
          onChange={handleDropoffLoc}
        />
        <label htmlFor="">Passenger count:</label>
        <input
          type="number"
          name="passengerCt"
          id="passengerCt"
          value={passengerCt}
          onChange={handlePassengerCt}
        />
        <label htmlFor="">Extra Luggage:</label>
        <input
          type="checkbox"
          name="luggage"
          id="luggage"
          value={luggage}
          onChange={handleLuggage}
        />
        <label htmlFor="">Additional notes:</label>
        <textarea
          name="notes"
          id="notes"
          value={notes}
          onChange={handleNotes}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormScreen;
