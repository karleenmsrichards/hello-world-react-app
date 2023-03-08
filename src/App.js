import "./App.css";
import { useState } from "react";
import { ButtonComponent } from "./ButtonComponent.js";
import { MainImage } from "./MainImage";

function App() {
  let [clickedHint, setClickedHint] = useState(false);

  return (
    <div className={clickedHint ? "App-with-background" : "App"}>
      <main>
        <MainImage />
        <h1>
          Hello World, I'm <span>Karleen</span>
        </h1>
        <h3>Guess my favourite colour?</h3>
        <ButtonComponent
          clickedHint={clickedHint}
          setClickedHint={setClickedHint}
        />
      </main>
    </div>
  );
}

export default App;
