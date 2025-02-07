import styled from "styled-components";
import { Dialog } from "radix-ui";

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: #000000b3;
	position: fixed;
	inset: 0;
	animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const DialogContent = styled(Dialog.Content)`
	background-color: #111;
	border-radius: 6px;
	box-shadow: 0 0 0 1px color-mix(in oklab, #ffffff2c, #3a3a3a 25%),0 12px 60px #0003,0 16px 64px #0006,0 16px 36px -20px #000000e6;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 500px;
	max-height: 85vh;
	padding: 25px;
	animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

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