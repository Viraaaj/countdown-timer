import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useTimer } from "react-timer-hook";
import CountdownStyle from "./CountdownStyle";
import Button from "@mui/material/Button";

const useStyles = makeStyles(CountdownStyle);

function CountdownCards({ expiryTimestamp }) {
  const styles = useStyles();

  //   [Values Using Hook]
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => alert("Countdown Ended!"),
    autoStart: false,
  });

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {/* [Cards Container] */}
      <Grid
        container
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={5} className={styles.cardContainer}>
          <div className={styles.cardValue}>{days}</div>
          <div className={styles.cardValueLabel}>Days</div>
        </Grid>

        <Grid item xs={12} sm={5} className={styles.cardContainer}>
          <div className={styles.cardValue}>{hours}</div>
          <div className={styles.cardValueLabel}>Hours</div>
        </Grid>

        <Grid item xs={12} sm={5} className={styles.cardContainer}>
          <div className={styles.cardValue}>{minutes}</div>
          <div className={styles.cardValueLabel}>Minutes</div>
        </Grid>

        <Grid item xs={12} sm={5} className={styles.cardContainer}>
          <div className={styles.cardValue}>{seconds}</div>
          <div className={styles.cardValueLabel}>Seconds</div>
        </Grid>
      </Grid>

      {/* [Countdown status] */}
      <div className={styles.countdownStatus}>
        {isRunning ? "Countdown Running" : "Countdown Not running"}
      </div>

      {/* [Options buttons] */}
      <Grid
        container
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={6} sm={2}>
          <Button
            onClick={start}
            className={styles.countdownOptionButton}
            variant="contained"
          >
            Start
          </Button>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Button
            onClick={pause}
            className={styles.countdownOptionButton}
            variant="contained"
          >
            pause
          </Button>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Button
            onClick={resume}
            className={styles.countdownOptionButton}
            variant="contained"
          >
            Resume
          </Button>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Button
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 0);
              restart(time);
            }}
            className={styles.countdownOptionButton}
            variant="contained"
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default CountdownCards;
