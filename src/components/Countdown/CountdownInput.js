import { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import CountdownStyle from "./CountdownStyle";
import CountDownValue from "./CountDownValue";

const useStyles = makeStyles(CountdownStyle);

const CountdownInput = ({ isCardsVisible }) => {
  const styles = useStyles();

  //   [States]
  const [hoursInput, setHoursInput] = useState(0);
  const [minutesInput, setMinutesInput] = useState(0);
  const [secondsInput, setSecondsInput] = useState(0);

  const [getTimeInSeconds, setGetTimeInSeconds] = useState(0);

  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.titleText}>It is now time for the countdown!</h1>

      {/* [Input Fields] */}
      <div className={styles.inputContainer}>
        <TextField
          id="outlined-basic"
          label="Hours"
          variant="outlined"
          type="number"
          onChange={(e) => {
            setHoursInput(e.target.value);
            setButtonClicked(false);
            isCardsVisible(false);
          }}
          size="small"
          className={styles.textField}
          InputProps={{
            inputProps: { min: 0 },
            style: {
              color: "#ffffff ",
              fontSize: 16,
            },
          }}
          InputLabelProps={{
            style: { color: "#ffffff", fontSize: 16 },
          }}
        />

        <TextField
          id="outlined-basic"
          label="Minutes"
          variant="outlined"
          type="number"
          onChange={(e) => {
            setMinutesInput(e.target.value);
            setButtonClicked(false);
            isCardsVisible(false);
          }}
          size="small"
          className={styles.textField}
          InputProps={{
            inputProps: { min: 0 },
            style: {
              color: "#ffffff ",
              fontSize: 16,
            },
          }}
          InputLabelProps={{
            style: { color: "#ffffff", fontSize: 16 },
          }}
        />

        <TextField
          id="outlined-basic"
          label="Seconds"
          variant="outlined"
          type="number"
          onChange={(e) => {
            setSecondsInput(e.target.value);
            setButtonClicked(false);
            isCardsVisible(false);
          }}
          size="small"
          className={styles.textField}
          InputProps={{
            inputProps: { min: 0 },
            style: {
              color: "#ffffff ",
              fontSize: 16,
            },
          }}
          InputLabelProps={{
            style: { color: "#ffffff", fontSize: 16 },
          }}
        />

        <Button
          disabled={buttonClicked}
          onClick={() => {
            if (hoursInput > 0 || minutesInput > 0 || secondsInput > 0) {
              setButtonClicked(true);
              isCardsVisible(true);
              setGetTimeInSeconds(
                hoursInput * 60 * 60 + minutesInput * 60 + secondsInput * 1
              );
            } else {
              alert("Please enter a valid number!");
            }
          }}
          className={styles.countdownShowButton}
          variant="contained"
        >
          Show Countdown
        </Button>
      </div>

      {getTimeInSeconds !== 0 && buttonClicked && (
        <CountDownValue seconds={getTimeInSeconds} />
      )}
    </div>
  );
};

export default CountdownInput;
