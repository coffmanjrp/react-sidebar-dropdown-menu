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

const SubMenu = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};

export default SubMenu;
