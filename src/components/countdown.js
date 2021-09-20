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
                <p className="time__number">{days}</p>
                <p className="time__title">days</p>
              </div>
              <div className="time">
                <p className="time__number">{hours}</p>
                <p className="time__title">hours</p>
              </div>
              <div className="time">
                <p className="time__number">{minutes}</p>
                <p className="time__title">min</p>
              </div>
              <div className="time">
                <p className="time__number">{seconds}</p>
                <p className="time__title">secs</p>
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
