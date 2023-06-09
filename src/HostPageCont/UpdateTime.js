import React, { useState, useEffect } from 'react';
import './HostPage.css'

function LiveTimeUpdateFunction() {
  const [timeValue, setTimeValue] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' }));

  useEffect(() => {
    const timer = setInterval(() => { //Gets Time, Updates, & Repeats
      setTimeValue(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' }));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  // const [isNight, setIsNight] = useState(false);

  // useEffect(() => {

  //   if (timeValue.endsWith('PM')) {
  //     setIsNight(false);
  //   } else {
  //     setIsNight(true);
  //   }

  // }, [timeValue]);
  

  // const element = document.querySelector('.bgnd'); //Fix: Use component state and props
  // if (timeValue.endsWith('AM')) {
  //   element.classList.add('night'); 
  // } else {
  //   element.classList.remove('night'); 
  // }

  return (
    <div className="titleName">
          <p className="timedesign">
              {timeValue}
          </p>
      </div>
  );
}

export default LiveTimeUpdateFunction;