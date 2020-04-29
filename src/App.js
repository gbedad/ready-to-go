import React, { useState } from "react";
import SpaceShuttle from "./assets/images/space-shuttle.png";

import "./App.css";

const App = () => {
  /*  const [counter, setCounter] = useState(0); */
  let [switch1, setSwitch1] = useState(false);
  let [switch2, setSwitch2] = useState(false);
  let [switch3, setSwitch3] = useState(false);

  console.log(switch1);

  return (
    <div className="App">
      <div className="header">
        <img alt="space shuttle" src={SpaceShuttle} />
        <span>Ready to Go</span>
      </div>
      <div className="ready-to-go">
        <div className="rst">
          <button
            className="reset"
            onClick={() => {
              switch1 = setSwitch1(false);
              switch2 = setSwitch2(false);
              switch3 = setSwitch3(false);
            }}
          >
            Reset
          </button>
        </div>
        <div className="onOff">
          <div className="buttonLeft">
            <button
              className="on-off"
              onClick={() => {
                switch1 = setSwitch1(true);
              }}
            >
              {switch1 ? (
                <div className="isOn">ON</div>
              ) : (
                <div className="isOff">ON</div>
              )}

              {/*  <img src={Plus} alt="plus" /> */}
            </button>
            <button
              className="on-off"
              onClick={() => {
                switch2 = setSwitch2(true);
              }}
            >
              {switch2 ? (
                <div className="isOn">ON</div>
              ) : (
                <div className="isOff">ON</div>
              )}

              {/*  <img src={Plus} alt="plus" /> */}
            </button>
            <button
              className="on-off"
              onClick={() => {
                switch3 = setSwitch3(true);
              }}
            >
              {switch3 ? (
                <div className="isOn">ON</div>
              ) : (
                <div className="isOff">ON</div>
              )}

              {/*  <img src={Plus} alt="plus" /> */}
            </button>
          </div>
          <div className="buttonRight">
            <button
              className="on-off"
              onClick={() => {
                switch1 = setSwitch1();
              }}
            >
              {switch1 ? (
                <div className="isOff">OFF</div>
              ) : (
                <div className="isOn">OFF</div>
              )}
              {/*  <img src={Plus} alt="plus" /> */}
            </button>
            <button
              className="on-off"
              onClick={() => {
                switch2 = setSwitch2();
              }}
            >
              {switch2 ? (
                <div className="isOff">OFF</div>
              ) : (
                <div className="isOn">OFF</div>
              )}

              {/*  <img src={Plus} alt="plus" /> */}
            </button>
            <button
              className="on-off"
              onClick={() => {
                switch3 = setSwitch3();
              }}
            >
              {switch3 ? (
                <div className="isOff">OFF</div>
              ) : (
                <div className="isOn">OFF</div>
              )}

              {/*  <img src={Plus} alt="plus" /> */}
            </button>
          </div>
        </div>
        <div className="goNoWay">
          <span>
            {switch1 === true && switch2 === true && switch3 === true ? (
              <div className="isGo">Go !</div>
            ) : (
              <div className="isNoWay">No Way !</div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
