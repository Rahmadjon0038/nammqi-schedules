'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Nav, Settings, MenuContainer } from './style.js'
import { sidebarData } from '@/utils/sidebarData.jsx'
import { CiSettings } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { toggleTheme } from '../darkmode.jsx'
import { MdMenu } from "react-icons/md";
import { useAuth } from '@/context/authContext.jsx'
import Image from 'next/image.js'
import profileImg from '../../assets/profile.png'
import { ProfileBox } from '@/app/settings/style.js'

function Sidebar() {

  const { role, setRole, userMedata } = useAuth()  //bu rollarni boshqarish uchun

  const [dark, setDark] = useState(true)
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
        {role == 'guest' ? <Link href={'login'} className='link'>
          <button className='login'>
            Tizimga kirish <span><IoMdLogIn fontSize={30} color='green' /></span>
          </button>
        </Link> :


          <Link className='link' href={'/settings'}>

          <ProfileBox>
            <Image
              src={profileImg}
              width={70}
              height={70}
              style={{ borderRadius: '100%', objectFit: 'cover',boxShadow:' 0 4px 12px var(--shadow)'}}
            />
            <div>
              <p>{userMedata?.firstname?.toUpperCase()}</p>
              <p>{userMedata?.lastname?.toUpperCase()}</p>
            </div>
          </ProfileBox>
          </Link>
        }

      </Settings>
    </Container>
  )
}

export default Sidebar
