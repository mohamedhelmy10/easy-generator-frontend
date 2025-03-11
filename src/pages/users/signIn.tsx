import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { useSignIn } from "./hooks";
import useStyles from "./styles";

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

const SignIn = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { execute: loginUser } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const { accessToken } = await loginUser({ email, password });
      localStorage.setItem("accessToken", accessToken);
      navigate("/users/profile");
    } catch (error) {
      if (error instanceof Error) {
        const errorResponse = error as unknown as ErrorResponse;
        if (errorResponse.response && errorResponse.response.data && errorResponse.response.data.message) {
          setError(`Failed to sign in. ${errorResponse.response.data.message}`);
        } else {
          setError(`Failed to sign in. ${error.message}`);
        }
      } else {
        setError("Failed to sign in. An unknown error occurred.");
      }
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Sign In</h2>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <div className={classes.inputField}>
          <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={classes.inputField}>
          <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className={classes.errorText}>{error}</p>}
        <Button text="Sign In" type="submit" className={classes.button} />
      </form>
    </div>
  );
};

export default SignIn;