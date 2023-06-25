import styled from "styled-components"

export const StyledInput = styled.input`
  width: 90%;
  height: 25px;
  margin-bottom: 6px;
  padding: 10px;
  border: 1px solid #cecece;
  border-radius: 5px;
  font-size: 14px;
  line-height: 14px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#0e0e0e"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};

  &::placeholder{
    color: #cecece;
  }
`