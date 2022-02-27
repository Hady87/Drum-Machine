//import Button  from "bootstrap";
import React, { useContext } from "react";
import Button from "./Button";
import DrumContext from "../context/DrumContext"

//import {Button ,ButtonGroup} from "react-bootstrap";

function DrumMachine() {
  //const {handlBank,checked}=useContext(DrumContext)
  return (
    <>
      <div className="container w-50">
        <div className="row justify-content-sm-center text-nowrap mt-4">
          <div className="col col-sm-6">
            <div>
              <Button
                //color="green"
                text="Q"

                //onClick={onAdd}
              />
              <Button
                //color="green"
                text="W"

                //onClick={onAdd}
              />
              <Button
                //color="green"
                text="E"

                //onClick={onAdd}
              />
            </div>
            <div>
              <Button
                //color="green"
                text="A"

                //onClick={onAdd}
              />
              <Button
                //color="green"
                text="S"

                //onClick={onAdd}
              />
              <Button
                //color="green"
                text="D"

                //onClick={onAdd}
              />
            </div>
            <div>
              <Button
                //color="green"
                text="Z"
                id="Z"

                //onClick={onAdd}
              />
              <Button
                //color="green"
                text="Q"

                //onClick={onAdd}
              />
              <Button
                //color="green"
                text="C"

                //onClick={onAdd}
              />
            </div>
          </div>

          <div className="col col-sm-auto justify-content-sm-center mt-2">
            <div className="form-check form-switch">
              <label className="form-check-label mb-2" htmlFor="power">
                Power
              </label>
              <input className="form-check-input" type="checkbox" id="power" />
            </div>
            <p className="textShow">text</p>
            <div>
              
              <input
                type="range"
                className="form-range mt-2"
                min="0"
                max="100"
                step="1"
                
              ></input>
            </div>
            <div className="form-check form-switch mt-2">
              <label className="form-check-label" htmlFor="bank">
                Bank
              </label>
              <input className="form-check-input" type="checkbox" id="bank"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrumMachine;
