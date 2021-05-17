import './App.css';
import Header from './components/Header.js';
import DatabasesList from './components/DatabasesList.js';

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
          <DatabasesList />
    </>
  );
}

export default App;
