import yes from "./child-yes.mp3";
import sorry from "./sorry.mp3";
import { useState } from "react";
import thankyou from "./thank-you.png";

export const ButtonComponent = ({ clickedHint, setClickedHint }) => {
  let [selected, setSelected] = useState(false);

  let sorrySound = new Audio(sorry);
  let yesSound = new Audio(yes);

  function handleHint() {
    clickedHint ? setClickedHint(false) : setClickedHint(true);
  }

  function handleRightAnswer() {
    selected ? setSelected(false) : setSelected(true);
    return yesSound.play();
  }

  function handleWrongAnswers() {
    selected ? setSelected(false) : setSelected(true);
    return sorrySound.play();
  }

  return (
    <div className="trivia-answers">
      <div className="button-container">
        <button className="hint-button" onClick={handleHint}>
          HINT
        </button>
        <button onClick={handleWrongAnswers}>Purple</button>
        <button onClick={handleWrongAnswers}>Blue</button>
        <button onClick={handleRightAnswer}>Pink</button>
        <button onClick={handleWrongAnswers}>Orange</button>
      </div>
      {selected && (
        <img
          className="thanks-image"
          width="60px"
          src={thankyou}
          alt="thank you"
        />
      )}
    </div>
  );
};
export default ButtonComponent;
