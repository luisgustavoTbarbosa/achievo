import styled from "styled-components";

export const NewTaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: #6366F1;
  border: none;
  color: #E4E4E7;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background .2s ease;

  &:hover {
    background-color: #4F46E5;
  }
`