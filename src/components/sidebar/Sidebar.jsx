'use client'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { Container, Nav, Settings, MenuContainer } from './style.js'
import { sidebarData } from '@/utils/sidebarData.jsx'
import { CiSettings } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { toggleTheme } from '../darkmode.jsx'
import { MdMenu } from "react-icons/md";
import { useAuth } from '@/context/authContext.jsx'
import Image from 'next/image.js'
import Login from '../login/Login.jsx'
import profilImg from '../../assets/profile.png'
import Hovermenu from '../profileHovermenu/Menu.jsx'
import { useRegister } from '@/hooks/useLogin.jsx'

function Sidebar() {
  const { role, userMeData } = useAuth();
  const [dark, setDark] = useState(true);
  const [hovermenu, setHoverMenu] = useState(false);
  const [hiddenNav, setHiddenNav] = useState(true);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHoverMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const replaseThema = () => {
    setDark(!dark);
    toggleTheme();
  };


  
  return (
    <Container $hiddenNav={hiddenNav}>
      <MenuContainer>
        <span onClick={() => setHiddenNav(!hiddenNav)} className='meniIcon'><MdMenu /></span>
        <h1 className={hiddenNav ? 'title' : ''}>Schedu<span>le</span></h1>
      </MenuContainer>

      <Nav>
        {sidebarData?.map((item) => (
          <Link key={item?.id} className='link' href={item?.path}>
            {item?.icon}
            <span className={hiddenNav ? 'name' : ''}>{item?.name}</span>
          </Link>
        ))}
      </Nav>

      <Settings>
        <div className='darkmode'>
          <span className='dark_icon' onClick={replaseThema}>
            {dark ? <MdDarkMode fontSize={30} /> : <CiLight fontSize={30} />}
          </span>
        </div>

        {role === 'guest' ? (
          <Login />
        ) : (
          <div ref={menuRef} style={{ position: 'relative' }}>
            <Image
              id='image'
              onClick={() => setHoverMenu(!hovermenu)}
              src={profilImg}
              width={70}
              height={70}
              style={{ objectFit: 'cover', borderRadius: '100%', cursor: 'pointer' }}
              alt='profile image'
            />
            {hovermenu && <Hovermenu />}
          </div>
        )}
      </Settings>
    </Container>
  );
}

export default Sidebar;
