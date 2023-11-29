import { useState, useEffect } from 'react';
import './Stopwatch.css';

const NumberDropdown = ({ value, onChange, maxNumber }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
      console.log("Dropdown visibility:", showDropdown);
  }, [showDropdown]);

  const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1); // Start numbers from 1

  const handleDropdownItemClicked = (number) => {
    onChange(number);
    setShowDropdown(false);
  };

  return (
    <div className="dropdown-container">
      <input
        type="text"
        value={value}
        onFocus={() => setShowDropdown(true)}
        readOnly
      />
      {showDropdown && (
        <div className="stopwatch-dropdown-menu" onMouseLeave={() => setShowDropdown(false)}>
          {numbers.map((number) => (
            <div key={number} onClick={() => handleDropdownItemClicked(number)} className="stopwatch-dropdown-item">
              {number}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (!isRunning && time <= 0 && hasStarted) {
      clearInterval(interval);
      alert('Time is up!');
    }

    return () => clearInterval(interval);
  }, [isRunning, time, hasStarted]);

  const startTimer = () => {
    const totalTime = parseInt(minutes) * 60 + parseInt(seconds);
    if (totalTime > 0) {
      setTime(totalTime * 1000);
      setIsRunning(true);
      setHasStarted(true);
    } else {
      alert('Please set a valid time!');
    }
  };

  const stopTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setMinutes(0);
    setSeconds(0);
    setHasStarted(false);
  };

  const formattedTime = new Date(time).toISOString().substr(11, 8);

  return (
    <div className="stopwatch-container">
        <div className="timer-display">
            <h2>{formattedTime}</h2>
        </div>
        <div className="input-container">
            <NumberDropdown 
              value={minutes} 
              onChange={setMinutes} 
              maxNumber={60} 
            />
            <NumberDropdown 
              value={seconds} 
              onChange={setSeconds} 
              maxNumber={60} 
            />
        </div>
        <div className="buttons-container">
            <button className='stop-buttons-css' onClick={startTimer} disabled={isRunning}>Start</button>
            <button className='stop-buttons-css' onClick={stopTimer} disabled={!isRunning}>Stop</button>
            <button className='stop-buttons-css' onClick={resetTimer}>Reset</button>
        </div>
    </div>
  );
};

export default Stopwatch;
