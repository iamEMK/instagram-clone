import styled from "styled-components"

import logoLoading from "../components/images/instagram.png"
function Loading() {
    return (
        <Loadings>
        <LogoBg>.</LogoBg>
        <LogoLoading src={logoLoading} />
        </Loadings>
    )
}

export default Loading

const Loadings= styled.div`
max-height: 100vh;
display: flex;
position: fixed;
top:0;
left:0;
right:0;
background:white;
z-index:10;
align-items: center;
justify-content: center;
`;
const LogoBg = styled.div`
filter: blur(12px);
background: transparent;
min-height: 100vh;
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`;
const LogoLoading = styled.img`
height: 100px;
position: absolute;
`;