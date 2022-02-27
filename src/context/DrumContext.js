import { createContext, useState, useEffect } from "react";
const DrumContext = createContext();

export const DrumProvider = ({ children }) => {
  //const [, setQuote] = useState();
  const [bankState, setBankState] = useState(true);
  const [powerState, setPowerState] = useState(true);
  const [display, setDisplay] = useState("");

  const [keybtn, setKeyBtn] = useState('');
  const [textShow] = useState();
  const [textHide,setTextHide] = useState('textHide');
   const [dispayClass,setDispayClass] = useState('textHide');
  const [volume, setVolume] = useState(50);
  const [bankOne] = useState([
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ]);
  const [bankTwo] = useState([
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ]);

  const currentBank = bankState ? bankOne : bankTwo
  //const empt=display.replace(/\s/g,' ')

   //dispayClass=powerState ? 'textShow' : textHide

  const text=powerState ? display:'empt'

  useEffect(() => {
    setDisplay('test')
    setDispayClass('textHide')
  }, []);

  const handleBank = () => {
    setBankState(!bankState);
  };
  const handlePower = () => {
      
    if(text==!'empt'){
      setDispayClass('textShow')
    }
    else{
        setDispayClass('textHide')
    }
    setPowerState((prevState) => !prevState);
     //setDispayClass(powerState ? 'textShow' : 'textHide')
    //setPowerState(!powerState);
    
  };
  const handleVolume = (e) => {
    //setDispayClass(powerState ? 'textShow' : 'textHide')
    setVolume(e.target.value);
   if(powerState){
     setDisplay(`volume: ${volume}`);
    setDispayClass('textShow')
   }
   else{
      setVolume(volume)
    setDispayClass('textHide')
    
   }
    
   
    
  };
  const handleDisplay = () => {
     setDispayClass('textHide')
  };
  const triggerBtn = (e) => {
    const key = e.target.value;
    setDispayClass(powerState ? 'textShow' : 'textHide')
    if(powerState){
      const Drum =currentBank.filter((item) => item.keyTrigger==key).map(item=>item.id);
     console.log(Drum)
     setDisplay(Drum)
  } 
  else{
    //setDisplay('  ')
  }

    }
    //setKeyBtn(previousState => e.target.value)
    //console.log(key)
  
  

  return (
    <DrumContext.Provider
      value={{
        bankState,
        powerState,
        volume,
        display,
        keybtn,
        text,
        dispayClass,
        textShow,
        textHide,
        handleBank,
        handlePower,
        handleVolume,
        handleDisplay,
        triggerBtn,
        //bankOne,
      }}
    >
      {children}
    </DrumContext.Provider>
  );

  
};
export default DrumContext;
