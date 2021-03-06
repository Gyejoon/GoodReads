import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const WrapperLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const HeaderUserDropDownItemBlock = styled.div`
  color: ${palette.gray9};
  padding: 0.75rem 1rem;
  line-height: 1.5;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: ${palette.gray0};
  }
`;

interface HeaderUserDropDownItemProps {
  to?: string;
  onClick?: () => void;
}

const HeaderUserDropDownItem: React.FC<HeaderUserDropDownItemProps> = ({
  children,
  to,
  onClick,
}) => {
  const jsx = (
    <HeaderUserDropDownItemBlock onClick={onClick}>
      {children}
    </HeaderUserDropDownItemBlock>
  );
  return to ? (
    <WrapperLink to={to} style={{ display: 'block' }}>
      {jsx}
    </WrapperLink>
  ) : (
    jsx
  );
};

export default HeaderUserDropDownItem;
