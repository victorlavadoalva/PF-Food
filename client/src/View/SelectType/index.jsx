import { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate ,useLocation, Outlet} from "react-router";
import styles from "./styles.module.css"
import { PostUser } from "../../Redux/actions";

export default function UserType() {
  const navigate = useNavigate()
  // const dispatch = useDispatch();
  const location = useLocation()
  // const {postuser} = useSelector(state => state);
  const objUser = JSON.parse(window.localStorage.getItem("UserVerificated"))
  

//   const [UserNew, setUserNew] = useState({
//     id:null,
//     name:objUser.name,
//     email:objUser.email,
//     type_customer:"",
//     description:null,
//     valoraciones:[],
//     rating:null
//   })
//   const [savedData , setSaveData] = useState(false)
//   const [isRestaurant, setIsRestaurant] = useState(false)
//   const [isClient, setIsClient] = useState(false)
// console.log(postuser)

// const updatedUser = { ...UserNew, type_customer: "User" };
//   setUserNew(updatedUser);
//   setSaveData(true)
//   setIsClient(true)
const handleTypeClient = (event) => {
  event.preventDefault()
  navigate("/user-type/")
}
const handleTypeRestaurant= (event) => {
  event.preventDefault()
  navigate("/user-type/")
}


// useEffect(() => {
//   if (savedData) {
    
//     console.log(UserNew);
//     console.log("Usuario cliente", isClient)
//     if (isClient) {
//       dispatch(PostUser(UserNew));
      
//     } else if (isRestaurant) {
//       window.localStorage.setItem("UserLogVerificate", JSON.stringify(UserNew));
//       window.localStorage.removeItem("redirectPath")
      
//       navigate("/form");
      
//     }
//   }      
// }, [navigate, dispatch, savedData, isClient, isRestaurant]);




// useEffect(() => {
//   console.log("!!!!!!!!USeEffect navigate client")
//   console.log("PostUser length",postuser)
// if(postuser[0] === true ){
//   const redirectPath = localStorage.getItem('redirectPath');
//       console.log("Obj USER", postuser)
//       window.localStorage.setItem("UserLogVerificate", JSON.stringify(postuser[1]));
//       console.log(redirectPath)
//       window.localStorage.setItem("IsLogin", true);
//       navigate(redirectPath)
// }
// },[navigate,postuser])



  return (
    <>
    {location.pathname === "/user-type" &&
    <div className={styles.container}>
                <ul>
                    <li>
                        <button onClick={handleTypeClient} >Cliente</button>
                    </li>
                    <li>
                        <button onClick={handleTypeRestaurant} >Restaurante</button>
                    </li>
                </ul>
    </div>
    }
    <Outlet/>
    </>
  );
}