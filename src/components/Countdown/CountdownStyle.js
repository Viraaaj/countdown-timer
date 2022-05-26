const CountdownStyle = (theme) => ({
  // [CoundownInput.js]
  container: {
    padding: "40px 16px 0 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  titleText: {
    fontFamily: "Montserrat, sans-serif",
    color: "rgb(248, 248, 248)",
    fontSize: 36,
    fontWeight: 500,
    lineHeight: "150%",

    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
  },

  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  textField: {
    color: "#ffffff !important",
    marginRight: "8px !important",
    width: "190px !important",
    marginTop: "10px !important",

    "& label.Mui-focused": {
      color: "#ffffff ",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffffff ",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffffff ",
      },
      "&:hover fieldset": {
        borderColor: "#ffffff ",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffffff ",
      },
    },

    [theme.breakpoints.down("xs")]: {
      marginRight: "0px !important",
    },
  },

  countdownShowButton: {
    width: "190px !important",
    marginTop: "10px !important",
    height: "40px !important",
    textTransform: "none !important",
    color: "#ffffff !important",
    fontSize: "1rem !important",
    fontFamily: "Montserrat, sans-serif !important",
    fontWeight: "500 !important",
    lineHeight: "150% !important",
    backgroundImage:
      "linear-gradient(45deg,hsla(324, 91%, 46%, 1) 0%,hsla(18, 100%, 49%, 1) 100%) !important",
  },

  //   [CountdownCards.js]
  cardContainer: {
    height: 140,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: "rgb(35, 38, 40)",
    boxShadow: "0 1rem 2rem rgb(0 0 0 / 20%)",
    color: "rgb(255, 255, 255)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },

  cardValue: {
    fontFamily: "Orbitron, sans-serif",
    fontSize: 56,
  },

  cardValueLabel: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 18,
  },

  //   [Countdown status]

  countdownStatus: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 18,
    marginTop: 30,
    color: "#ffffff",
  },

  //   [Options Buttons]
  countdownOptionButton: {
    width: "120px !important",
    marginTop: "20px !important",
    height: "40px !important",
    textTransform: "none !important",
    color: "#ffffff !important",
    fontSize: "1rem !important",
    fontFamily: "Montserrat, sans-serif !important",
    fontWeight: "500 !important",
    lineHeight: "150% !important",
    backgroundImage:
      "linear-gradient(45deg,hsla(324, 91%, 46%, 1) 0%,hsla(18, 100%, 49%, 1) 100%) !important",
  },
});

export default CountdownStyle;
