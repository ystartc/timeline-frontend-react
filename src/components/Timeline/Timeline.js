import TimelineEvent from './TimelineEvent/TimelineEvent';
import './Timeline.css';

const Timeline = props => {
  return (
    <TimelineEvent
      person={props.person}
      status={props.status}
      timestamp={props.timastamp}
    />
  );
};

export default Timeline;
