import styled from "styled-components";
import create from "../components/images/create.png";
import InputOption from "./InputOption";
import music from "../components/images/music.png";
import video from "../components/images/video.png";
import calander from "../components/images/calander.png";
import image from "../components/images/image.png";
import Post from "./Post";
import { useAuthState } from "react-firebase-hooks/auth";
import db, { auth } from "../fireb";
import { useEffect, useState } from "react";
import firebase from 'firebase';

function Feeds() {
    const [ user ] = useAuthState(auth);
    const [ posts , setPosts ] = useState([ ]);
    const [ input , setInput] = useState("");

    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
        );
    }, []);
    const sendPost = (e) => {
            e.preventDefault();
            db.collection("posts").add({
                name:user.displayName,
                description: "Vellore",
                content:input,
                photoURL: user.photoURL,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            setInput("");
    }
 
    return (
        <Feed>
                <FeedContainer>
                        <FeedInput>
                            <img src={create}/>
                            <form>
                                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                                <button type="submit" onClick={sendPost}>Send</button>
                            </form>
                        </FeedInput>
                        <FeedInputOption>
                                <InputOption icon={image} title="Image" />
                                <InputOption icon={music} title="Music" />
                                <InputOption icon={video} title="Video" />
                                <InputOption icon={calander} title="Events" />
                        </FeedInputOption>
                </FeedContainer>
                <Posts>
                {
                    posts.map(({ id, data:{ name,description,content,photoURL,timestamp}}) => (
                    <Post key={id} name={name} description={description}
                    content={content} 
                    photoURL={photoURL} timestamp={timestamp}/>
    ))}
                </Posts>
        </Feed>
    )
}

export default Feeds

const Feed = styled.div`
    display: flex;
    flex-direction:column;
    background:rgba(14,14,14,0.09);
    justify-content:center;
    align-items:center;
    padding-top: 15px;
   //margin-top: -1.5rem;
    //border: 2px solid;
    min-height: 100vh;

`;
const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: whitesmoke;
    height: 20%;
    width:600px;
    position: sticky;
    top:55px;
    border: 3px solid;
    border-radius: 10px;
   border-image-slice: 1;
   //border-width: 5px;
   border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
   margin-bottom:20px;
    z-index: 4;
    @media (max-width: 480px) {
    width: 350px;
  }
`;
const FeedInput = styled.div`
background: white;
padding: 10px;
border-radius: 30px;
margin-bottom:10px;
//border: 1px solid; 
display: flex;
    img{
        height:30px;
    }
    form{
        width:100%;
        input{
            border: none;
            font-size: 18px;
            width: 100%;
            height: 30px;
            padding: 5px;
            outline: none;
        }
        button{
            display: none;
        }
    }

`;
const FeedInputOption = styled.div`
display:flex;
justify-content: space-around;
`;
const Posts= styled.div`

`;