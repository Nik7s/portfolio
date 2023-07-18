import React from "react";
import { ModalCard, ModalLink, Overlay } from "../styles/Modal.styled";
const Modal = ({ toggleHandler }) => {
  return (
    <>
      <OverlayBackground toggleHandler={toggleHandler} />
      <ModalCard>
        This site is no longer updated. Go to{" "}
        <ModalLink href="https://martinlucas.vercel.app/">
          martinlucas.vercel.app
        </ModalLink>
      </ModalCard>
    </>
  );
};

const OverlayBackground = ({ toggleHandler }) => {
  return <Overlay onClick={toggleHandler} />;
};

export default Modal;
