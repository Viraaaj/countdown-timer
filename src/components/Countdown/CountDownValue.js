import CountdownCards from "./CountdownCards";

const CountDownValue = ({ seconds }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + seconds);

  return (
    <div style={{ marginTop: 60, width: "100%" }}>
      <CountdownCards expiryTimestamp={time} />
    </div>
  );
};

export default CountDownValue;
