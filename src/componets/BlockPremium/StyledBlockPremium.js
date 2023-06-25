import styled from "styled-components";

export const ScreenContainer = styled.div`
width: 100%;
height: 100%;
min-height: 95vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
h1 {
    color: #e04e37;
    font-size: 45pt;
    text-decoration: double underline #cecece;
    margin: -40px 20px 20px 0px;
  }
h2{
    color: #000;
    font-size: 25pt;
    margin-bottom: 5px;
}
h3{
    font-size: 15pt;
    color: #000;
}
span{
    color:  #e04e37;
}

@media (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 100%;
    h1{
        margin: 40px 20px 20px 0px;
        font-size: 25pt;
        text-align: center;
    }
    h2{
        font-size: 20pt;
        text-align: center;
        margin-bottom: 20px;
    }
    h3{
        font-size: 15pt;
        text-align: center;
    }
  }
`
export const LeftContainer = styled.div`
    margin-left: 20px;

    @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    h1{
        margin: 40px 20px 20px 0px;
        font-size: 25pt;
        text-align: center;
    }
    h2{
        font-size: 20pt;
        text-align: center;
        margin-bottom: 20px;
    }
    h3{
        font-size: 15pt;
        text-align: center;
    }
  }
`

export const BlockContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
@media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    h1{
        margin: 40px 20px 20px 0px;
        font-size: 25pt;
        text-align: center;
    }
    h2{
        font-size: 20pt;
        text-align: center;
        margin-bottom: 20px;
    }
    h3{
        font-size: 15pt;
        text-align: center;
    }
  }
    
`

export const BlockInfo = styled.div`
  width: 200px;
  height: 270px;
  margin: 20px;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3{
    text-align: center;
    font-size: 13pt;
  }
  img{
    margin-bottom: 8px;
  }
  

`
