const theme = {
  palette: {
    primary: {
      light: "#fffa00",
      main: "#ff9400",
      dark: "#b36800",
      contrastText: "#000000",
    },
    secondary: {
      light: "#598d57",
      main: "#2c5f2d",
      dark: "#003403",
      contrastText: "#ffffff",
    },
  },
  typography: {
    useNextVarients: true,
  },
  form: {
    textAlign: "center",
  },
  image: {
    margin: "20px auto 20px auto",
  },
  pageTitle: {
    margin: "10px auto 10px auto",
  },
  button: {
    marginTop: 20,
    position: "relative",
  },
  textField: {
    margin: "10px auto 10px auto",
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progress: {
    position: "absolute",
  },
  invisibleSeparator: {
    border: "none",
    margin: 4,
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    marginBottom: 20,
  },
};

export default theme;
