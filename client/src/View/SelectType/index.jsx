import { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./styles.module.css"
import {useAuth0} from "@auth0/auth0-react"
import { PostUser } from "../../Redux/actions";

export default function UserType() {
  const { loginWithRedirect, user} = useAuth0();
  
  const {postuser} = useSelector(state => state);
  const dispatch = useDispatch();
  
  const [UserNew, setUserNew] = useState({
    id:null,
    name:user.name,
    email:user.email,
    type_customer:"",
    description:null,
    valoraciones:[],
    rating:null
  })
  const [savedData , setSaveData] = useState(false)
console.log(postuser)


const handleTypeClient = (event) => {
  event.preventDefault()
  const updatedUser = { ...UserNew, type_customer: "Cliente" };
  setUserNew(updatedUser);
  setSaveData(true)

}
const handleTypeRestaurant= (event) => {
  event.preventDefault()
  const updatedUser = { ...UserNew, type_customer: "Restaurante" };
  setUserNew(updatedUser);
  setSaveData(true)
}


useEffect(() => {
  if(savedData){
    console.log(UserNew)
    dispatch(PostUser(UserNew))
    
  }      
},[dispatch,savedData])

useEffect(() => {
  function Local (){
    const redirectPath = localStorage.getItem('redirectPath');
    if (postuser) {
    window.localStorage.setItem("User", JSON.stringify(postuser));
    };
    const redirect = async () => {
      
      await loginWithRedirect({ appState: { targetUrl: redirectPath } });
      localStorage.removeItem('redirectPath');
    }
    if (redirectPath) {
      redirect();
    }
    
  }
  
    Local()

}, [ loginWithRedirect,postuser]);



  return (
    <div className={styles.container}>
                <ul>
                    <li>
                        <button onClick={handleTypeClient} value={UserNew.type_customer}>Cliente</button>
                    </li>
                    <li>
                        <button onClick={handleTypeRestaurant} value={UserNew.type_customer}>Restaurante</button>
                    </li>
                </ul>
    </div>
  );
}