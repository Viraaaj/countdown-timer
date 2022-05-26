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
        padding: "0 16px",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        <CountdownInput />
      </div>
    </div>
  );
}

export default App;
