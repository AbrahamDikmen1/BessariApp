import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../../features/authSlice";
import { LoginContainer } from "../../Components/StyledComponents/styledLoggin";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(user));
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <section className="loginHeading">
          <h1> Välkommen Admin </h1>
        </section>
        <section>
          <input
            label="Display name"
            type="text"
            variant="outlined"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

          <input
            label="Password"
            type="password"
            variant="outlined"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </section>

        <button type="submit" variant="contained">
          {auth.loginStatus === "pending" ? "Submiting" : "Log in"}
        </button>

        {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      </form>
    </LoginContainer>
  );
};

export default AdminPage;
