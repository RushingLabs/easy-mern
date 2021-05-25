import './App.css';

function App() {

  const callServer = async () => {
    const response = await fetch('/api/getData');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    // this.setState({ renderedResponse: someData });
    console.table(body);
    return { renderedResponse: body };
  };

  return (
    <div className="App">
      <h2>App Test</h2>

      <div className="App">
        <h2>Call out to API!</h2>
        {/* <p>{renderedResponse.express}</p> */}
      </div>

      <button onClick={() => callServer()}>Click Me</button>

      <ul>
        <li>test data goes here</li>
      </ul>
    </div>
  );
}

export default App;
