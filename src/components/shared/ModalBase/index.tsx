import { Modal } from "native-base";
import { ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  maxWidth?: string;
  title?: string;
  children: ReactNode;
  footer?: JSX.Element | (() => JSX.Element);
};

export function ModalBase({
  onClose,
  open,
  maxWidth,
  title,
  children,
  footer,
}: Props) {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <Modal.Content maxWidth={maxWidth ? maxWidth : "400px"}>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>{footer}</Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
