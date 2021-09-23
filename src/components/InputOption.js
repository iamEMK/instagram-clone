import styled from "styled-components";

function InputOption({icon, title, color}) {
    return (
        <InputOptions>
            <Icon src={icon} style={{color:color}}/>
            <h4>{title}</h4>
        </InputOptions>
    )
}

export default InputOption

const InputOptions = styled.div`
 display: flex;
 cursor:pointer;
 @media (max-width: 480px) {
    h4{
        font-size: 15px;
    }
}
`;
const Icon = styled.img`
height:20px;
margin-right: 6px;
@media (max-width: 480px) {
    height: 16px;
}
`;