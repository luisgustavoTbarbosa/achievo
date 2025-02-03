import styled from "styled-components";

export const TasksListContainer = styled.ul`
  margin-top: 1.5rem;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    color: #E4E4E7;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    input[type="checkbox"] {
      appearance: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      border: 1px solid #E4E4E7;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: unset;

      &:checked {
        background-color: #E4E4E7;
      }
    }

    button {
      display: flex;
      padding: 0.25rem;
      border-radius: 6px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: background .2s ease;

      &:hover {
        background-color: #6366F1;
      }

      &.remove:hover {
        background-color: #EF4444;
      }
    }
  }

  li + li {
    border-top: 1px solid #3F3F46;
  }
`