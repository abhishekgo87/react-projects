import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("45");
  const onButtonClick = (buttonText) => console.log(buttonText);

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer
        onButtonClick={onButtonClick}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
