import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import InputOption from "./InputOption";
import like from "../components/images/like.png"
import share from "../components/images/share.png"
import comment from "../components/images/comment.png"
import save from "../components/images/save.png"

function Post({name,description,photoURL,content,timestamp}) {
    return (
        <Posts>
                <PostHeader>
                        <Avatar src={photoURL} />
                    <PostInfo>
                        <h4>{name}</h4>
                        <span>{description}</span>
                        <h5> {new Date(timestamp?.toDate()).toUTCString()}  </h5>
                    </PostInfo>
                </PostHeader>
                <PostBody>
                    <Content>{content}</Content>
                </PostBody>
                <PostBottom>
                <InputOption icon={like} title="Likes"/>
                <InputOption icon={comment} title="Comments"/>
                <InputOption icon={share} title="Share"/>
                <InputOption icon={save} title="Save"/>
                </PostBottom>
        </Posts>
    )
}

export default Post

const Posts= styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: white;
    height: 20%;
    width:600px;
    border-radius: 10px;
    box-shadow: 1px 3px 8px -3px  black;
    margin-bottom:20px;
    overflow:hidden;
    @media (max-width: 480px) {
    width: 350px;
    margin-bottom:10px;
  }
`;
const PostHeader= styled.div`
display: flex;
padding:5px;
margin-bottom: 10px;
`;
const PostInfo= styled.div`
margin-left: 10px;
    span{
        margin-right: 10px;
    }
    h5{
        display: inline-block;
        font-weight: lighter;
    }
    @media (max-width: 480px) {
           h4{
               font-size:12px;
           }
           span{
               font-size: 12px;
           }
           h5{
            display: inline-block;
            font-size:12px;
           }
  }
`;
const PostBody=styled.div`
padding: 10px;
margin-bottom: 20px;
margin-bottom: 10px;
`;
const PostBottom= styled.div`
border-top: 2px solid whitesmoke;
display: flex;
padding-top: 8px;
justify-content: space-around;
&InputOption{
    opacity:0.82;
:hover{
opacity:1;
}
}
@media (max-width: 480px) {
    
  }
`;
const Content= styled.div`
    font-size: 18;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    letter-spacing: 1px;
`;