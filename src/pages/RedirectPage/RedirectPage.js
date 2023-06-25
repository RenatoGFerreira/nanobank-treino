import { useNavigate } from "react-router-dom"
import styled from "styled-components";



export default function RedirectPage(){

    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/")
      }, "4000");

    return(
        <Screen>
        <h1>Olá essa página não existe</h1>
        <h2>Por ser um site fictício você será redirecionado a Home</h2>
        <h1>BYYYEEE!!!</h1>
        </Screen>
    )
}

const Screen = styled.div`
background-color: #cecece;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`