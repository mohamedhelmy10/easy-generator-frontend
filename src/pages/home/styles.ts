import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "html, body, #root": {
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
      },
    },
    homeContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(to right, #3b82f6, #9333ea)",
      color: "white",
      textAlign: "center",
    },
    imageContainer: {
      marginTop: "2rem",
    },
    homeImage: {
      width: "16rem",
      height: "16rem",
      objectFit: "cover",
      borderRadius: "50%",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.5s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    homeTitle: {
      fontSize: "3rem",
      fontWeight: 800,
      marginBottom: "1.5rem",
      animation: "$bounce 2s infinite",
    },
    homeDescription: {
      fontSize: "1.125rem",
      marginBottom: "2rem",
      maxWidth: "24rem",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    buttonContainer: {
      display: "flex",
      gap: "1rem",
    },
    homeButton: {
      backgroundColor: "white",
      color: "#3b82f6",
      transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "#e5e7eb",
        transform: "scale(1.05)",
      },
    },
    "@keyframes bounce": {
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateY(0)",
      },
      "40%": {
        transform: "translateY(-30px)",
      },
      "60%": {
        transform: "translateY(-15px)",
      },
    },
  })
);

export default useStyles;