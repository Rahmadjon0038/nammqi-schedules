'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Nav, Settings, MenuContainer } from './style.js'
import { sidebarData } from '@/utils/sidebarData.jsx'
import { CiSettings } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { toggleTheme } from '../darkmode.jsx'
import { MdMenu } from "react-icons/md";
import { useAuth } from '@/context/authContext.jsx'
import Image from 'next/image.js'
import profileImg from '../../assets/profile.png'
import Profile from '../profileMenu/Profile.jsx'
import Login from '../login/Login.jsx'
import profilImg from '../../assets/profile.png'
import Hovermenu from '../profileHovermenu/Menu.jsx'


function Sidebar() {

  const { role, userMeData } = useAuth()  //bu rollarni boshqarish uchun
  const [dark, setDark] = useState(true)
  const [hovermenu, setHoverMenu] = useState(false)

  const replaseThema = () => {
    setDark(!dark)
    toggleTheme()
  }

  const [hiddenNav, setHiddenNav] = useState(true)
  return (
    <Container $hiddenNav={hiddenNav}>
      <MenuContainer >
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
          {/* {role !== 'guest' ? <Link className='setttingIcon' href={'/settings'}>
            <button className='setttingIcon'>
              Profile<span><CiSettings fontSize={30} color='blue' /></span>
            </button>
          </Link> : ""} */}
        </div>
        {role == 'guest' ? <Login /> :
          <>
            <Image id='image' onClick={() => setHoverMenu(!hovermenu)}
              src={profilImg}
              width={70}
              height={70}
              style={{ objectFit: 'cover', borderRadius: '100%' }}
              alt='rasm bor'
            />
            {hovermenu && <Hovermenu />}
          </>
          // <Profile />
        }

      </Settings>
    </Container>
  )
}

export default Sidebar
