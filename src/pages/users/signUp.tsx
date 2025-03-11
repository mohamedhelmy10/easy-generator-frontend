import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { useSignUp } from "./hooks";
import useStyles from "./styles";

const SignUp = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { execute: registerUser } = useSignUp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const validateName = (name: string) => name.trim().length >= 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", password: "", confirmPassword: "" };

    if (!validateName(name)) newErrors.name = "Name must be at least 3 characters.";
    if (!validateEmail(email)) newErrors.email = "Invalid email format.";
    if (!validatePassword(password))
      newErrors.password = "Password must be at least 8 characters, include a letter, a number, and a special character!";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match!";

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      try {
        await registerUser({ name, email, password });
        navigate("/users/signin");
      } catch (error) {
        console.error("Error during sign up:", error);
      }
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Sign Up</h2>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <div className={classes.inputField}>
          <InputField type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className={classes.errorText}>{errors.name}</p>}
        </div>

        <div className={classes.inputField}>
          <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className={classes.errorText}>{errors.email}</p>}
        </div>

        <div className={classes.inputField}>
          <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p className={classes.errorText}>{errors.password}</p>}
        </div>

        <div className={classes.inputField}>
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className={classes.errorText}>{errors.confirmPassword}</p>}
        </div>

        <Button text="Sign Up" type="submit" className={classes.button} />
      </form>
    </div>
  );
};

export default SignUp;
