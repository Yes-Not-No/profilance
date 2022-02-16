import "./logInForm.scss";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { auth } from "../../../store/actions";
import { usersData } from "../../../data/passwords";

export default function LogInForm({ handleClose }) {
  const dispatch = useDispatch();

  function authorization() {
    const login = document.getElementById("login-form_name").value;
    const password = document.getElementById("login-form_password").value;
    const searchingUser = () => {
      return usersData.find((element) => {
        return element.login.toLowerCase() === login.toLowerCase();
      });
    };

    const user = searchingUser();

    if (
      user !== undefined &&
      login.toLowerCase() === user.login.toLowerCase() &&
      password.toLowerCase() === user.password.toLowerCase()
    ) {
      dispatch(auth(user));
      handleClose();
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, isAuthorize: true })
      );
    }

    return;
  }

  return (
    <form action="#" className="login-form">
      <label htmlFor="login-form_name">
        <span>Имя пользователя: </span>
        <input id="login-form_name" type="text" />
      </label>
      <label htmlFor="login-form_password">
        <span>Пароль: </span>
        <input id="login-form_password" type="password" />
      </label>
      <Button
        variant="contained"
        style={{
          width: "max-content",
          backgroundColor: "#F2AE2E",
        }}
        onClick={authorization}
      >
        Войти
      </Button>
    </form>
  );
}
