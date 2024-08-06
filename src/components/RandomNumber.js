import { useState } from "react";
import generateRandomNum from "../utils/generateRandomNums";
//
function RandomNumber() {
  const [randomNum, setRandomNum] = useState(generateRandomNum());
  //======================================
  const changeRandomNum = () => {
    setRandomNum(generateRandomNum());
  };
  //======================================
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  );
}
export default RandomNumber;
