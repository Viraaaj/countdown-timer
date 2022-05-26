const FooterStyle = (theme) => ({
  container: {
    padding: "100px 16px 0 16px",
  },

  contentContainer: {
    maxWidth: 1320,
    height: "100%",
    margin: "0 auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  linksContainer: {
    marginTop: 30,
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },

  footerImage: {
    position: "relative",
    height: 140,
    width: "100%",
    opacity: 0.6,

    [theme.breakpoints.down("xs")]: {
      height: 80,
      marginTop: 10,
    },
  },
});

export default FooterStyle;
