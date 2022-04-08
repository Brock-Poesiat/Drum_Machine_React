import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const drumBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const KeyboardKey = ({ play, sound: {keyTrigger, url, keyCode, id } }) => {
  
  const handleKeydown = (event) => {
    if(event.keyCode === keyCode) {
      play(keyTrigger, id)
    }
  }
  
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown)
  }, [])
  
     return (<button className="drum-pad" id={id} onClick={() => play(keyTrigger, id)}>{keyTrigger}
        <audio src={url} className="clip btn" id={keyTrigger} ></audio>
      </button> )
}

const Keyboard = ({ play }) => {
  let returnArr = [];
  for (let i = 0; i < drumBank.length; i++){
    returnArr.push(<KeyboardKey play={play} sound={drumBank[i]} />)
    // if ((i+1) % 3 == 0) {
    //   returnArr.push(<br />);
    // }
  }
  return returnArr;
  //return drumBank.map((sound) => <KeyboardKey play={play} sound={sound} />)
};

const App = () => {

  const setDisplay = (buttonId) => {
    document.getElementById("display").innerHTML = buttonId;    
  }

  const play = (key, buttonId) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplay(buttonId);
  }

  return(
    <div id="drum-machine">
      <h2>React Drum Machine by Brock Poesiat</h2>
      <div class="grid">
        <Keyboard play={play}/>   
      </div>
      <h3 id="display"></h3>
    </div>
  );
}

export default App;
