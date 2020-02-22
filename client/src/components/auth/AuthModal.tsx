import React from 'react';
import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';
import transitions from 'lib/styles/transitions';
import palette from 'lib/styles/palette';

const AuthModalBlock = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  overflow: hidden;
  .wrapper {
    width: 324px;
    height: 448px;
    background: white;
    padding: 1.5rem;

    ${props =>
      props.visible
        ? css`
            animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
          `}

    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    display: flex;

    .exit-wrapper {
      display: flex;
      justify-content: flex-end;
      font-size: 1.5rem;
      color: ${palette.gray6};
      margin-bottom: 2.25rem;
      svg {
        cursor: pointer;
      }
    }

    .form-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
}

const AuthModal: React.SFC<AuthModalProps> = ({
  visible,
  children,
  onClose,
}) => {
  return (
    <AuthModalBlock visible={visible}>
      <div className="wrapper">
        <div className="exit-wrapper">
          <MdClose onClick={onClose} tabIndex={1} />
        </div>
        <div className="form-wrapper">{children}</div>
      </div>
    </AuthModalBlock>
  );
};

export default AuthModal;