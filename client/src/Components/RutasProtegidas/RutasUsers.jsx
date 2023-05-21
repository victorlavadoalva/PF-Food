import { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate ,Outlet } from "react-router-dom";
import { GetUserEmail,Loading} from "../../Redux/actions";


export default function RutasUsers(){
const { userFoundByEmail, login} = useSelector(state => state);
const dispatch = useDispatch();
const navigate = useNavigate();
const redirection = "/user-type"


  const [savedData , setSaveData] = useState(false)
  const [saveEmail , setSaveEmail] = useState("")
  const [redirected, setRedirected] = useState(false);
  
const isAuthenticated = login[0]
const user = login[1]
console.log("userLOGIN",user)
console.log("Authen",isAuthenticated)

    useEffect(() => {
        if(isAuthenticated){
             setSaveEmail(user.email)
        }
   },[isAuthenticated])
   
   useEffect(() => {
     if(saveEmail){
       console.log(saveEmail)
         dispatch(GetUserEmail({saveEmail}));
     }
   
   },[dispatch, saveEmail])

useEffect(() => {
    
    console.log("useEffect foundByemail", userFoundByEmail)
    console.log(userFoundByEmail[0])
    const checkIfNewUser = async () => {
      if (userFoundByEmail[0] === true && !redirected) {
        const storedPath = localStorage.getItem('redirectPath');
        console.log(storedPath)
        navigate(storedPath)
         setRedirected(true);

        setTimeout(() => {
          
          if (redirected) {
          window.localStorage.removeItem('redirectPath');
        }
        },5000)
        
      } else if (userFoundByEmail[0] === false && !redirected) {
        navigate(redirection)
        setRedirected(true);
      }
    };
  
    checkIfNewUser()

}, [userFoundByEmail.length, redirected, navigate]);

return <Outlet/>
}
