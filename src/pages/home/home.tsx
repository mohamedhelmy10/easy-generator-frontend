import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useStyles from "./styles";
import logo from "../../assets/images/eg-logo.jpg"; 

const Home = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <div className={classes.imageContainer}>
        <img src={logo} alt="Easy Generator" className={classes.homeImage} />
      </div>
      <h1 className={classes.homeTitle}>Welcome to Easy Generator</h1>
      <p className={classes.homeDescription}>
        Easy Generator helps you create and manage content effortlessly. Join us today to get started!
      </p>
      
      <div className={classes.buttonContainer}>
        <Button text="Sign In" onClick={() => navigate("/signin")} className={classes.homeButton} />
        <Button text="Sign Up" onClick={() => navigate("/signup")} className={classes.homeButton} />
      </div>
    </div>
  );
};

export default Home;