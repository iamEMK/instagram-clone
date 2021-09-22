import styled from "styled-components"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from "../fireb";
import logo from "../components/images/735145cfe0a4.png"
import search from "../components/images/search.png"
import home from "../components/images/home.svg"
import msg from "../components/images/msg.png"
import heart from "../components/images/heart.png"
import { Link, useHistory } from "react-router-dom"
import Login from "./Login";

function Header() {

        const [ user ] = useAuthState(auth);
        const history = useHistory();
        const login = () =>{
            auth.signInWithPopup(provider).then(result => 
                console.log(result)).catch( error => alert(error.message)
                )}
    return (
        <Headers>
           <Nav>
            <Link to="/">
                <img src={logo} alt="logo" />            
            </Link>
                      
           </Nav>
           <Input>
                <input  placeholder="Search"/>
                <img src={search} alt="" />
           </Input>
           <Menus>
                <img src={home} alt="" />
                <img src={msg} alt="" />
                <img src={heart} alt="" />
                {
                !user ? <Loginlogo onClick={login}>LOGIN</Loginlogo>:
                <LoginOut>
                <UserImg src={user.photoURL} alt={user.displayName} />
                <DropDown>
                <span onClick={()=>auth.signOut().then(
                  history.push('/')
                 )}>SignOut</span>
              </DropDown>
                </LoginOut>
                }
           </Menus>
        </Headers>
    )
}

export default Header

const Headers = styled.div`
user-select:none;
display: flex;
//border-bottom: 2px solid gray;
box-shadow: 0px 0px 11px black;
padding: 10px;
//height: 70px;
justify-content: space-evenly;
`;
const Nav = styled.div`
    margin-right: 10px;
    :hover{
            cursor: pointer;
        }
`;
const Input= styled.div`
display: flex;
align-items:center;
padding: 2px;
border: 1px solid;
border-radius: 10px;
input{
    border:none;
    text-align: left;
    padding-left: 10px;
    outline: none;
    width: 100%;
}
img{
    object-fit: contain;
    height:30px;

}
`;
const Menus = styled.div`
    display: flex;
    gap:10px;
    //flex:2;
    justify-content: flex-start;
    img{
        height: 30px;
        margin-left: 10px;
        :hover{
            cursor: pointer;
        }
    }
`;
const Loginlogo = styled.span`
        font-size: 16px;
        font-weight: bolder;
        border: 1px solid;
        border-radius: 10px;
        padding: 8px;
        background-color: black;
        color: white;
        cursor: pointer;
        :hover{
            color: black;
            transition: all 0.2s ease-in;
            background-color: white;
        }
`;
const DropDown= styled.div`
    display: none;
    position: absolute;
    top: 30px;
    left: 20px;
    font-size: 16px;
    border: 1px solid;
    padding:8px;
    background-color: black; 
    color: whitesmoke;
    border-radius: 20px;
    
`;
const LoginOut = styled.div`
position: relative;
    :hover{
        ${DropDown}{
            display: flex;
            cursor: pointer;
            transition-duration:1s;
        }
    }
`;
const UserImg = styled.img`
height: 100%;
border-radius: 50%;

`;
