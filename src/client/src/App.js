import { useState } from 'react';
import './App.css';

function App() {
  const [ someData, setSomeData ] = useState({});

  const callServer = async () => {
    const response = await fetch('/api/getData');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    console.table(body);
    setSomeData(body);
  };

  return (
    <div className="App">
      <h2>App Test</h2>

      <div>
        <h3>Call out to API!</h3>
        <p>
          From the server: <b>{someData && someData[0] && someData[0].someKey ? someData[0].someKey : ''}</b>
        </p>
      </div>

      <button onClick={() => callServer()}>Click Me</button>

    </div>
  );
}

export default App;
