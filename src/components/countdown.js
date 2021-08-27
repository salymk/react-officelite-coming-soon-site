import React from 'react';

const Countdown = () => (
  <>
    <div className="countdown">
      <p className="countdown__title">
        Coming <span>4 Nov 2020</span>
      </p>
      <div className="countdown__timer">
        <div className="time">
          <h3>47</h3>
          <p>days</p>
        </div>
        <div className="time">
          <h3>07</h3>
          <p>hours</p>
        </div>
        <div className="time">
          <h3>56</h3>
          <p>min</p>
        </div>
        <div className="time">
          <h3>14</h3>
          <p>secs</p>
        </div>
      </div>
    </div>
  </>
);

export default Countdown;
