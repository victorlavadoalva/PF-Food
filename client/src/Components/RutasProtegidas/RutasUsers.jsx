import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { GetUserEmail, Loading } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";

export default function RutasUsers() {
  const { userFoundByEmail, login } = useSelector((state) => state);
  const { isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirection = "/user-type";

  console.log("Verificado", isAuthenticated);
  console.log("isLoading", isLoading);
  const [saveEmail, setSaveEmail] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setSaveEmail(user.email);
      const objUser = JSON.stringify(user);
      window.localStorage.setItem("UserVerificated", objUser);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (saveEmail) {
      console.log(saveEmail);
      dispatch(GetUserEmail({ saveEmail }));
    }
  }, [dispatch, saveEmail]);

  useEffect(() => {
    // console.log("useEffect foundByemail", userFoundByEmail)
    // console.log(userFoundByEmail[0])
    const checkIfNewUser = async () => {
      if (userFoundByEmail[0] === true) {
        const storedPath = localStorage.getItem("redirectPath");
        console.log(storedPath);
        navigate(storedPath);
        window.localStorage.removeItem("redirectPath");
      } else if (userFoundByEmail[0] === false) {
        navigate(redirection);
      }
    };

    checkIfNewUser();
  }, [userFoundByEmail.length, navigate]);

  return <Outlet />;
}
