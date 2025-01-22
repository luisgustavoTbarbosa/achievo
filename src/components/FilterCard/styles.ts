import styled from "styled-components";

interface CardProps {
  $variant: string
}

export const Card = styled.div<CardProps>`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5rem;
  background-color: #323238;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #C4C4CC;

  svg {
    margin-bottom: 0.2rem;
    padding: 0.2rem;
    background-color: ${props => props.$variant};
    border-radius: 100%;
  }

  .count {
    font-size: 1rem;
    font-weight: 600;
    color: #FFFFFF;
  }
`
