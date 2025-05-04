'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, Nav, Settings } from './style.js'
import { sidebarData } from '@/utils/sidebarData.jsx'
import logoImg from '../../assets/att_logo.png'
import Image from 'next/image.js'
import { CiSettings } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { toggleTheme } from '../darkmode.jsx'
function Sidebar() {
  const [dark, setDark] = useState(false)

  const replaseThema = () => {
    setDark(!dark)
    toggleTheme()
  }

  return (
    <Container>
      <Image
        src={logoImg}
        alt="Tavsif"
        width={100}
      />
      <Nav>
        {sidebarData?.map((item) => (
          <Link className='link' href={item?.path}>{item?.icon} {item?.name}</Link>
        ))}
      </Nav>
      <Settings>
        <div className='darkmode'>
          <span onClick={replaseThema}>{dark ? <MdDarkMode fontSize={30} /> : <CiLight fontSize={30} />}</span>
          <Link className='setttingIcon' href={'/settings'}><button className='setttingIcon'>Sozlamalar<span><CiSettings fontSize={30} color='blue' /></span></button></Link>
        </div>
        <Link href={'login'} className='link'> <button className='login'>Tizimga kirish <span><IoMdLogIn fontSize={30} color='green' /></span></button></Link>
      </Settings>
    </Container>
  )
}

export default Sidebar
