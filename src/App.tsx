import React from 'react';
import './App.css';
import Background from './Components/Background/Background.react';

const App = (): JSX.Element => {

  const [colorString, setColorString] = React.useState("#000000");

  console.log(colorString);
  
  return (
    <div className="App">
      <header
        className="App-header"
        style={{backgroundColor: colorString}}
      >
        <Background setColorString={setColorString}/>
        <h1 className="color-h1">{
          colorString.substring(3,)
        }</h1>
      </header>
    </div>
  );
}

export default App;
