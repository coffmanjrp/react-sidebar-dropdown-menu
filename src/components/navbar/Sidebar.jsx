import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { sidebarData, SubMenu } from './';

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #15171c;
`;

const NavIcon = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  height: 80px;
  font-size: 2rem;
  color: #fff;
`;

const SidebarNav = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  display: flex;
  justify-content: center;
  width: 250px;
  height: 100vh;
  background-color: #15171c;
  transition: left 0.35s ease;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 200%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div ref={ref}>
          <Nav>
            <NavIcon to="#!" onClick={showSidebar}>
              <FaBars />
            </NavIcon>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#!" onClick={showSidebar}>
                <AiOutlineClose />
              </NavIcon>
              {sidebarData.map((item, index) => (
                <SubMenu key={index} item={item} />
              ))}
            </SidebarWrap>
          </SidebarNav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
