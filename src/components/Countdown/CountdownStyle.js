const CountdownStyle = (theme) => ({
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
    width: "180px !important",
    marginTop: "8px !important",

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

  countdownStartButton: {
    width: "180px !important",
    marginTop: "8px !important",
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
