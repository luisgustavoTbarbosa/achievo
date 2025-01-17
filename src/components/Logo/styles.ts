import styled from "styled-components";

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  border-radius: 8px;
  color: #FFFFFF;
  font-weight: 600;
  text-decoration: none;
  
  &:focus {
    box-shadow: unset;
  }

  img {
    width: 35px;
  }
`
