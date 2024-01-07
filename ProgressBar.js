import React, { useState } from "react";

const ProgressBar = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const handleChange = (e) => {
    setEnteredValue(e.target.value);
  };
  return (
    <div>
      <div>
        <div>
          <h2>Marks out of 100</h2>
          <input
            value={enteredValue}
            onChange={handleChange}
            style={{ border: "1px solid black" }}
          />
        </div>

        <br />

        {enteredValue > 0 && enteredValue <= 100 ? (
          <>
            <div
              style={{ background: "lightgray", height: "22px", width: "100%" }}
            >
              {enteredValue > 33 && enteredValue <= 100 ? (
                <div style={{ width: `${enteredValue}%`, background: "green" }}>
                  <span>{enteredValue}%</span>
                </div>
              ) : (
                <div style={{ width: `${enteredValue}%`, background: "red" }}>
                  <span>{enteredValue}%</span>
                </div>
              )}
            </div>
          </>
        ) : (
          <div>
            {(enteredValue < 0 || enteredValue > 100) && (
              <div>
                <span>Please enter a value between 0 and 100</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
