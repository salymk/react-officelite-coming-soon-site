/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';
import { DateTime } from 'luxon';

const CountdownTimer = (props) => {
  // This is the format for our DateTime component
  const format = { year: 'numeric', month: 'short', day: 'numeric' };
  const fortySevenDaysInMillis = 4060800000;

  return (
    <>
      <Countdown
        date={Date.now() + fortySevenDaysInMillis}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className={`countdown ${props.className}`}>
            <p className="countdown__title">
              Coming{' '}
              <span>
                {DateTime.fromMillis(
                  Date.now() + fortySevenDaysInMillis
                ).toLocaleString(format)}
              </span>
            </p>
            <div className="countdown__timer">
              <div className="time">
                <h3>{days}</h3>
                <p>days</p>
              </div>
              <div className="time">
                <h3>{hours}</h3>
                <p>hours</p>
              </div>
              <div className="time">
                <h3>{minutes}</h3>
                <p>min</p>
              </div>
              <div className="time">
                <h3>{seconds}</h3>
                <p>secs</p>
              </div>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default CountdownTimer;

CountdownTimer.propTypes = {
  className: PropTypes.string.isRequired,
};
