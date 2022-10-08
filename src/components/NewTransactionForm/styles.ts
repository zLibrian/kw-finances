import * as Dialog from "@radix-ui/react-dialog";
import { cssVar, darken } from "polished";
import styled from "styled-components";

export const DialogOverlay = styled(Dialog.Overlay)`
  background: #000000;
  opacity: 0.5;
  position: fixed;
  inset: 0;
`;

export const DialogTitle = styled(Dialog.Title)`
  color: var(--text-title);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;
`;

export const DialogContent = styled(Dialog.Content)`
  background-color: #f0f2f5;
  border-radius: 0.3rem;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  max-width: 35rem;
  max-height: 95vh;
  padding: 4rem 3rem;
`;

export const DialogForm = styled.form`
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    align-items: flex-end;
  }
`;

type RadioBoxProps = {
  isActive?: boolean;
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  background-color: ${(props) =>
    props.isActive
      ? darken(0.1, `${cssVar("--input-background")}`)
      : `${cssVar("--input-background")}`};
  justify-content: center;
  gap: 1rem;
  width: 100%;
  color: var(--text-title);
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1rem;
  border: 1.5px solid;
  border-color: ${(props) =>
    props.isActive
      ? darken(0.2, `${cssVar("--text-body")}`)
      : `${cssVar("--text-body")}`};
  border-radius: 0.3rem;

  img {
    width: 1.4rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &.highlight-button {
    background-color: var(--green);
    font-weight: 600;
    color: white;
    margin-top: 1.5rem;
  }
`;

export const DialogClose = styled(Dialog.Close)`
  img {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 1.3rem;
    margin-right: 1.3rem;
  }
`;
