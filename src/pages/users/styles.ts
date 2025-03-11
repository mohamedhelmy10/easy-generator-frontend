import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width: "100vw",
      background: "linear-gradient(to right, #3b82f6, #9333ea)",
      color: "white",
      textAlign: "center",
    },
    formContainer: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "90%",
      maxWidth: "400px",
      margin: "1rem",
    },
    title: {
      fontSize: "2rem",
      fontWeight: 600,
      marginBottom: "1rem",
      color: "#FFFFFF",
    },
    inputField: {
      marginBottom: "1rem",
      "& input": {
        width: "100%",
        padding: "0.75rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        boxSizing: "border-box", // Ensure padding is included in the width
      },
    },
    errorText: {
      color: "red",
      fontSize: "0.875rem",
      marginTop: "0.5rem",
    },
    button: {
      backgroundColor: "#3b82f6",
      color: "white",
      padding: "0.75rem 1.5rem",
      borderRadius: "5px",
      transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "#9333ea",
        transform: "scale(1.05)",
      },
    },
    profileContainer: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "90%",
      maxWidth: "400px",
      margin: "1rem",
      textAlign: "center",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    profileTitle: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "1.5rem",
      color: "#FFFFFF",
    },
    greeting: {
      fontSize: "1.5rem",
      fontWeight: 600,
      marginBottom: "1rem",
      color: "#3b82f6",
    },
    profileText: {
      fontSize: "1.125rem",
      fontWeight: 500,
      color: "#3b82f6",
      marginBottom: "0.5rem",
    },
    profileValue: {
      fontSize: "1.125rem",
      fontWeight: 400,
      color: "#333",
    },
    additionalContent: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#666",
      marginTop: "1rem",
    },
  })
);

export default useStyles;
