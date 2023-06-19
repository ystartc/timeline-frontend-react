import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Ada Lovelace's social media feed</p>
      </header>
      <section>
        <Timeline timelineData={timelineData} />
      </section>
    </div>
  );
}

export default App;
