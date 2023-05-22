import { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import styles from "./styles.module.css"
import { PostUser ,PostRestaurant} from "../../Redux/actions";

export default function UserType() {
  const navigate = useNavigate()
  const {postuser} = useSelector(state => state);
  const dispatch = useDispatch();
  const objUser = JSON.parse(window.localStorage.getItem("UserVerificated"))
  
  const [UserNew, setUserNew] = useState({
    id:null,
    name:objUser.name,
    email:objUser.email,
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
    if(UserNew.type_customer === "Cliente"){
      dispatch(PostUser(UserNew))
    }else if(UserNew.type_customer === "Restaurante"){
      dispatch(PostRestaurant(UserNew))
    }
    
    
  }      
},[dispatch,savedData])

useEffect(() => {
  console.log("useEffect",postuser)
  function Local (){
    const redirectPath = localStorage.getItem('redirectPath');
    console.log(redirectPath)
    if (postuser) {
    window.localStorage.setItem("UserToken", JSON.stringify(postuser));
    };
    const redirect = async () => {
      
      navigate(redirectPath)
      
    }
    if (redirectPath) {
      redirect();
    }
  }
    Local()

}, [ navigate,postuser.length]);



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