'use client'
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import { BurgerMenu, Container, CustomMenu, Nav, Settings } from './style.js'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { toggleTheme } from '../darkmode.jsx'
import { useAuth } from '@/context/authContext.jsx'
import Login from '../login/Login.jsx'
import UserProfile from '../profile/UserProfile.jsx';
import BuildinsSelect from '../buildigsSelect/BuildingsSelect.jsx';
import { useRouter } from 'next/navigation.js';
import { IoMdMenu, IoMdClose } from "react-icons/io";
function Navbar() {
  const { role, userMeData } = useAuth();
  const [dark, setDark] = useState(true);
  const [hiddenNav, setHiddenNav] = useState(true);
  const menuRef = useRef(null);
  const router = useRouter()

  const [openMenu, setOpenMenu] = useState(false)

  const replaseThema = () => {
    setDark(!dark);
    toggleTheme();
  };

  return (
    <Container>

      <h1 onClick={() => router.push('/')} >Schedu<span>le</span></h1>
      <Nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link className='link' href={'/buildings'}>
            <span className={hiddenNav ? 'name' : ''}>Binolar </span>
          </Link>
          <BuildinsSelect />
        </div>

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
              <UserProfile />
            </div>
          )}
        </Settings>
        <span className='dark_icon' onClick={replaseThema}>
          {dark ? <MdDarkMode fontSize={30} /> : <CiLight fontSize={30} />}
        </span>
      </Nav>

      <CustomMenu onClick={() => setOpenMenu(!openMenu)}> <IoMdMenu className='menu' />

        {openMenu && <BurgerMenu>
          <IoMdClose className='menu' onClick={() => setOpenMenu(!openMenu)} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link className='link' href={'/buildings'}>
              <span className={hiddenNav ? 'name' : ''}>Binolar </span>
            </Link>
            <BuildinsSelect />
          </div>

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
              <div className='info' ref={menuRef} style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                <UserProfile />
                <span className='dark_icon' onClick={replaseThema}>
                  {dark ? <MdDarkMode fontSize={30} /> : <CiLight fontSize={30} />}
                </span>
              </div>
            )}

          </Settings>

        </BurgerMenu>}

      </CustomMenu>
    </Container>
  );
}

export default Navbar;
