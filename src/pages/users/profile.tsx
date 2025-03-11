import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useStyles from "./styles";
import { useUserProfile } from "./hooks";
import { IUserResponse } from "../../network/users";

const Profile = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { execute: fetchUserProfile } = useUserProfile();
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const userProfile = await fetchUserProfile();
        setUser(userProfile);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        setError("Failed to fetch user profile.");
      }
    };

    getUserProfile();
  }, [fetchUserProfile, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  if (error) {
    return <div className={classes.container}><p>{error}</p></div>;
  }

  if (!user) {
    return <div className={classes.container}><p>Loading...</p></div>;
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.profileTitle}>Profile</h2>
      <div className={classes.profileContainer}>
        <p className={classes.profileText}>Name: <span className={classes.profileValue}>{user.name}</span></p>
        <p className={classes.profileText}>Email: <span className={classes.profileValue}>{user.email}</span></p>
        <Button text="Logout" onClick={handleLogout} className={classes.button} />
      </div>
    </div>
  );
};

export default Profile;
