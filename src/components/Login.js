import { useHistory } from "react-router-dom";
import { auth, provider } from "../fireb";

function Login() {
    const history = useHistory();
    const login = () =>{
        auth.signInWithPopup(provider).then(result => 
            console.log(result)).catch( error => alert(error.message)
            )
    }
    return (
        <div>
            <h1 onClick={login}>Login</h1>
            <h2 onClick={()=> auth.signOut().then(history.push('/'))}> signout</h2>
        </div>
    )
}

export default Login;
