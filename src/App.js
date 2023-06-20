import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline/Timeline';

const App = () => {
  const title = `${timelineData.person}'s social media feed`;
  return (
    <div className='App'>
      <header className='App-header'>
        <p className='App-title'>{title}</p>
      </header>
      <section className='App-main'>
        <Timeline timelineData={timelineData.events} />
      </section>
    </div>
  );
};

export default App;
