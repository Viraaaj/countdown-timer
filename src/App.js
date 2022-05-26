import CountdownInput from "./components/Countdown/CountdownInput";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        backgroundColor: "rgb(33, 36, 38)",
      }}
    >
      <CountdownInput />
    </div>
  );
}

export default App;
