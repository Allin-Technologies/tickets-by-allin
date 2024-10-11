import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeRemaining = (date: string): TimeRemaining => {
    const target = new Date(date).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formattedDistance = formatDistanceToNow(new Date(targetDate));

  return (
    <div className="countdown-container">
      <p className="countdown-distance">{formattedDistance}</p>
      <div className="time-block">
        <span className="days">{timeRemaining.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="time-block">
        <span className="hours">{timeRemaining.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="time-block">
        <span className="minutes">{timeRemaining.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="time-block">
        <span className="seconds">{timeRemaining.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;