import { useState } from "react";
import CountdownInput from "./components/Countdown/CountdownInput";
import Footer from "./components/Footer/Footer";

function App() {
  const [cardVisible, setCardVisible] = useState(false);

  const isCardsVisible = (visisbilityState) => {
    setCardVisible(visisbilityState);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(33, 36, 38)",
        padding: "0 16px",
      }}
    >
      <div
        style={
          cardVisible
            ? {
                maxWidth: 1120,
                height: "100%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }
            : {
                maxWidth: 1120,
                height: "100vh",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }
        }
      >
        <CountdownInput isCardsVisible={isCardsVisible} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
