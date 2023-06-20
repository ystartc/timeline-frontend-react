import React from 'react';
import TimelineEvent from '../TimelineEvent/TimelineEvent';
import './Timeline.css';

const Timeline = props => {
  const getTimeLineJSX = events => {
    console.log(events);
    return events.map(event => (
      <TimelineEvent
        person={event.person}
        status={event.status}
        timestamp={event.timastamp}
      />
    ));
  };

  return <ul className='timeline'>{getTimeLineJSX(props)}</ul>;
};

export default Timeline;
