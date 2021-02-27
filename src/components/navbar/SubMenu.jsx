import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  font-size: 1.125rem;
  color: #e1e9fc;
  cursor: pointer;
  &:hover {
    background-color: #252831;
    border-left: 4px solid #632ce4;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  height: 60px;
  background-color: #414757;
  font-size: 0.9375rem;
  color: #f5f5f5;
  cursor: pointer;
  &:hover {
    background-color: #632ce4;
  }
`;

const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subNav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subNav &&
        item.subNav.map((item, index) => (
          <DropdownLink key={index} to={item.path}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

export default SubMenu;
