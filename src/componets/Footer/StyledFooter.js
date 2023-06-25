import styled from "styled-components";
import { Link } from "react-router-dom";

export const ScreenContainer = styled.div`
background-color: #000;
display: flex;
flex-direction: column;
justify-content: space-between;
h1{
    font-size: 14pt;
    margin-bottom: 5px;
    text-align: center;
}

`

export const TopContainer = styled.div`
padding: 15px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
ul{
    margin: 40px;
}
`

export const BottonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        max-width: 650px;
        padding: 5px;
        text-align: center;
        display: inline;
    }
}
img{
    width: 150px;
    margin: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
}
`

export const LinkStyled = styled(Link)`
    font-size: 12pt;
    :hover{
        color: #e04e37;
    }
`

export const SocialMedias = styled.div`
:last-child{
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px;
    margin-bottom: 100px;
}
`

