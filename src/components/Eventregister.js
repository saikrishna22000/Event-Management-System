import React, { useState } from 'react';
import axios from 'axios';
import './EventRegister.css'; // Import CSS file for styling

const EventRegister = () => {
  const [eventName, setEventName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [amount, setAmount] = useState('');
  const [needFood, setNeedFood] = useState(false);
  const [needTransport, setNeedTransport] = useState(false);
  const [needAccommodation, setNeedAccommodation] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
      
    alert(document.getElementsByName ('en')[0].value);
    event.preventDefault();
    axios.post('http://localhost:8081/insert1',{
        en:document.getElementsByName('en')[0].value,
        ca:document.getElementsByName('ca')[0].value,
        am:document.getElementsByName('am')[0].value,
        ne:document.getElementsByName('ne')[0].value,
        nt:document.getElementsByName('nt')[0].value

}).then((response)=>{
console.log(response.data);
})

  };

  return (
    <div className="container">
      <h2 className="title">Event Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input type="text" id="eventName" value={eventName} name="en" onChange={(e) => setEventName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="settingCapacity">Setting Capacity:</label>
          <input type="text" id="settingCapacity" value={capacity} name="ca" onChange={(e) => setCapacity(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount for Event:</label>
          <input type="text" id="amount" value={amount} name="am" onChange={(e) => setAmount(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="checkbox" checked={needFood} name="ne" onChange={(e) => setNeedFood(e.target.checked)} />
          <label htmlFor="needFood">Need Food</label>
        </div>
        <div className="form-group">
          <input type="checkbox" checked={needTransport} name="nt" onChange={(e) => setNeedTransport(e.target.checked)} />
          <label htmlFor="needTransport">Need Transport</label>
        </div>
        <div className="form-group">
          <input type="checkbox" checked={needAccommodation} name="na" onChange={(e) => setNeedAccommodation(e.target.value)} /> <label htmlFor="needAccommodation">Need Accommodation</label>
        </div>

        <button onClick = {handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default EventRegister;
