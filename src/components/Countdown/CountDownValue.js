const CountDownValue = ({ seconds }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + seconds);

  return (
    <div style={{ marginTop: 40 }}>
      <h2>{seconds}</h2>
    </div>
  );
};

export default CountDownValue;
