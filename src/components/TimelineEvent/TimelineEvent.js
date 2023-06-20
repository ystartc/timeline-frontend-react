import React from 'react';
import './TimelineEvent.css';
import TimeStamp from '../TimeStamp/TimeStamp';

const TimelineEvent = props => {
  return (
    <li className='timeline-event'>
      <h3 className='event-person'>{props.person}</h3>
      <p className='event-status'>{props.status}</p>
      <h3 className='event-time'>
        <TimeStamp time={props.timestamp} />
      </h3>
    </li>
  );
};

export default TimelineEvent;
