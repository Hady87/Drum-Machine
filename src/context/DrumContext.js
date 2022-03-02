import { createContext, useState, useEffect} from "react";
import BankOne from "../data/BankOne";
import BankTwo from "../data/BankTwo";
const DrumContext = createContext();

export const DrumProvider = ({ children }) => {
  
  const [bankState, setBankState] = useState(true);
  const [powerState, setPowerState] = useState(true);
  const [display, setDisplay] = useState("");
  const [clip, setClip] = useState();

  const [keybtn, setKeyBtn] = useState("Q");
  const [textShow] = useState();
  const [textHide, setTextHide] = useState("textHide");
  const [dispayClass, setDispayClass] = useState("textHide");
  const [volume, setVolume] = useState(0.5);
  //const [playing, setPlaying] = useState(false);
  

  const currentBank = bankState ? BankTwo : BankOne;
  //const empt=display.replace(/\s/g,' ')

  //dispayClass=powerState ? 'textShow' : textHide

  const text = powerState ? display : "empt";

  useEffect(() => {
    setDisplay("test");
    setDispayClass("textHide");
    //triggerBtn()
  }, []);

  const handleBank = () => {
    setBankState(!bankState);
  };
  const handlePower = () => {
    if (text !=="empt") {
      setDispayClass("textShow");
    } else {
      setDispayClass("textHide");
    }
    setPowerState((prevState) => !prevState);
    //setDispayClass(powerState ? 'textShow' : 'textHide')
    //setPowerState(!powerState);
  };
  const handleVolume = (e) => {
    //setDispayClass(powerState ? 'textShow' : 'textHide')
    setVolume(e.target.value);
    if (powerState) {
      setDisplay(`volume: ${Math.round(volume * 100)}`);
      setDispayClass("textShow");
    } else {
      setVolume(volume);
      setDispayClass("textHide");
    }
  };
  const handleDisplay = () => {
    setDispayClass("textHide");
  };
  const triggerBtn = (e) => {
    const key = e.target.value;

    setKeyBtn(key);
    console.log(" the button is : " + keybtn);

    setDispayClass(powerState ? "textShow" : "textHide");
    if (powerState) {
      const Drum = currentBank
        .filter((item) => item.keyTrigger === key)
        .map((item) => item.id);
      const src = currentBank
        .filter((item) => item.keyTrigger === key)
        .map((item) => item.url);
      //console.log(src)
      setDisplay(Drum);
      setClip(src);

      
      const audio = document.getElementById(keybtn);

      setTimeout(() => {
        audio.play();
        audio.volume = volume;
        console.log("the audio is volume " +volume);
        
      }, 100);
    }
  };
  

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
        clip,
        
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
