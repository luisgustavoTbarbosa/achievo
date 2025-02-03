import styled from "styled-components";

export const SearchTaskContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;

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
    padding: 6px 6px 6px 30px;
    border: 1px solid #3F3F46;
    border-radius: 6px;
    background-color: #2A2A30;
    color: #E4E4E7;

    &::placeholder {
      color: #A1A1AA;
    }
  }
`
