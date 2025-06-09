'use client'
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import { Container, Nav, Settings} from './style.js'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { toggleTheme } from '../darkmode.jsx'
import { MdMenu } from "react-icons/md";
import { useAuth } from '@/context/authContext.jsx'
import Image from 'next/image.js'
import Login from '../login/Login.jsx'
import profilImg from '../../assets/profile.png'
import Hovermenu from '../profileHovermenu/Menu.jsx'
import { useBuildings } from '@/hooks/useBuildings.jsx'
import { IoIosArrowDown } from "react-icons/io";
import UserProfile from '../profile/UserProfile.jsx';

function Navbar() {
  const { role, userMeData } = useAuth();
  const [dark, setDark] = useState(true);
  const [hovermenu, setHoverMenu] = useState(false);
  const [hiddenNav, setHiddenNav] = useState(true);
  const menuRef = useRef(null);
  const { data, isLoading } = useBuildings()

  const replaseThema = () => {
    setDark(!dark);
    toggleTheme();
  };

  return (
    <Container $hiddenNav={hiddenNav}>
      <h1 className={hiddenNav ? 'title' : ''}>Schedu<span>le</span></h1>
      <Nav>
        <Link className='link' href={'/buildings'}>
          <span className={hiddenNav ? 'name' : ''}>Binolar</span>
        </Link>
        {/* <div>
          {data?.buildings?.map((item) => (
            <div key={item.id}>
              <Link href={`/binolar/${item?.id}`}>{item?.name}</Link>
            </div>
          ))}
        </div> */}
        <Link className='link' href={'/schedule'}>
          <span className={hiddenNav ? 'name' : ''}>Dars jadvali</span>
        </Link>

        {role == 'admin' && <Link className='link' href={'/users'}>
          <span className={hiddenNav ? 'name' : ''}>Foydalanuvchilar</span>
        </Link>}

      <Settings>

        {role === 'guest' ? (
          <Login />
        ) : (
          <div className='info' ref={menuRef} style={{ position: 'relative' }}>
            <UserProfile/>
          </div>
        )}
      </Settings>
          <span className='dark_icon' onClick={replaseThema}>
            {dark ? <MdDarkMode fontSize={30} /> : <CiLight fontSize={30} />}
          </span>
      </Nav>

    </Container>
  );
}

export default Navbar;
