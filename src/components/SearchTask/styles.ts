import styled from "styled-components";

export const SearchTaskContainer = styled.div`
  position: relative;
  display: flex;

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 6px;
    margin: auto;
  }

  input {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 6px;
    background-color: #323238;
    padding: 6px 6px 6px 30px;
    color: #FFFFFF;

    &::placeholder {
      color: #C4C4CC;
    }
  }
`
