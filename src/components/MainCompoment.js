import React, { useContext, useState, useRef } from "react";
//import React, { useRef } from 'react';

import Audio from "./Audio";
import DrumContext from "../context/DrumContext";
function MainCompoment() {
  //const [bankState, setBankState] = useState(true);
  const audioRef = useRef()
  const {
    bankState,
    powerState,
    volume,
    display,
    keybtn,
    text,
    textShow,
    textHide,
    clip,
    dispayClass,
    handleBank,
    handlePower,
    handleVolume,
    handleDisplay,
    triggerBtn,
  } = useContext(DrumContext);

 
  return (
    <>
      <div className="container w-50">
        <div className="row justify-content-sm-center text-nowrap mt-4">
          <div className="col col-sm-6">
            <div>
              <input
                type="button"
                className="btn btn-secondary"
                value="Q"
                onClick={triggerBtn}
              />

              <input
                type="button"
                className="btn btn-secondary"
                value="W"
                onClick={triggerBtn}
              />
              <input
                type="button"
                className="btn btn-secondary"
                value="E"
                onClick={triggerBtn}
              />
            </div>
            <div>
              <input
                type="button"
                className="btn btn-secondary"
                value="A"
                onClick={triggerBtn}
              />
              <input
                type="button"
                className="btn btn-secondary"
                value="S"
                onClick={triggerBtn}
              />
              <input
                type="button"
                className="btn btn-secondary"
                value="D"
                onClick={triggerBtn}
              />
            </div>
            <div>
              <input
                type="button"
                className="btn btn-secondary"
                value="Z"
                onClick={triggerBtn}
              />
              <input
                type="button"
                className="btn btn-secondary"
                value="X"
                onClick={triggerBtn}
              />
              <input
                type="button"
                className="btn btn-secondary"
                value="C"
                onClick={triggerBtn}
              />
                <audio id={keybtn} src={clip} ></audio>      
                      

            <audio>
			<source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mpeg" >
			</source>
		</audio>
            </div>
          </div>

          <div className="col col-sm-auto justify-content-sm-center mt-2">
            <div className="form-check form-switch">
              <label className="form-check-label mb-2" htmlFor="power">
                Power
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="power"
                checked={powerState}
                onChange={handlePower}
              />
            </div>
            <p className={dispayClass}>{` ${text}`}</p>
            <div>
              <input
                type="range"
                className="form-range mt-2"
                min="0"
                max="1"
                step="0.01"
                defaultValue={volume}
                onChange={handleVolume}
                onMouseLeave={handleDisplay}
              ></input>
            </div>
            <div className="form-check form-switch mt-2">
              <label className="form-check-label" htmlFor="bank">
                Bank
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="bank"
                checked={bankState}
                onChange={handleBank}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCompoment;
