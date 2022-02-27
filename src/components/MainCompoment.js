import { useContext, useState } from "react";
import Button from "./Button";
import DrumContext from "../context/DrumContext";
function MainCompoment() {
  //const [bankState, setBankState] = useState(true);
  const {
    bankState,
    powerState,
    volume,
    display,
    keybtn,
    text,
    textShow,
    textHide,
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
              <input type='button' className='btn btn-secondary' value='Q' onClick={triggerBtn} />
    
             <input type='button' className='btn btn-secondary' value='W' onClick={triggerBtn} />
             <input type='button' className='btn btn-secondary' value='E' onClick={triggerBtn} />
            </div>
            <div>
             <input type='button' className='btn btn-secondary' value='A' onClick={triggerBtn} />
             <input type='button' className='btn btn-secondary' value='S' onClick={triggerBtn}/>
             <input type='button' className='btn btn-secondary' value='D' onClick={triggerBtn} />
            </div>
            <div>
             <input type='button' className='btn btn-secondary' value='Z' onClick={triggerBtn} />
            <input type='button' className='btn btn-secondary' value='X' onClick={triggerBtn} />
             <input type='button' className='btn btn-secondary' value='C' onClick={triggerBtn}/>
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
            <p className={dispayClass}>
             {` ${text}`}  
            </p>
            <div>
              <input
                type="range"
                className="form-range mt-2"
                min="0"
                max="100"
                step="1"
                value={volume}
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
