'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, CustomMenu, GlobalModalStyle, Nav, Settings, ModalMenuContent } from './style.js'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { toggleTheme } from '../darkmode.jsx'
import { useAuth } from '@/context/authContext.jsx'
import Login from '../login/Login.jsx'
import UserProfile from '../profile/UserProfile.jsx';
import BuildinsSelect from '../buildigsSelect/BuildingsSelect.jsx';
import { useRouter } from 'next/navigation.js';
import { Modal } from 'antd';
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const { role } = useAuth();
  const [dark, setDark] = useState(true);
  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const replaseThema = () => {
    setDark(!dark);
    toggleTheme();
  };

  return (
    <Container>
      <h1 onClick={() => router.push('/')}>Schedule</h1>

      {/* Desktop nav */}
      <Nav>
        <div className="nav-group">
          <Link className='link' href={'/buildings'}>Binolar</Link>
          <BuildinsSelect />
        </div>
        <Link className='link' href={'/schedule'}>Dars jadvali</Link>
        {role === 'admin' && <Link className='link' href={'/users'}>Foydalanuvchilar</Link>}

        <Settings>
          {role === 'guest' ? <Login /> : <UserProfile />}
        </Settings>

        <span className='dark_icon' onClick={replaseThema}>
          {dark ? <MdDarkMode className='arrows' fontSize={28} /> : <CiLight className='arrows' fontSize={28} />}
        </span>
      </Nav>

      {/* Burger icon */}
      <CustomMenu>
        <IoMdMenu onClick={showModal} className="menu" />
      </CustomMenu>

      {/* Mobile modal */}
      <Modal
        title={null}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        closable={false}
        centered
      >
        <ModalMenuContent>
          <div className="nav-group">
            <Link className='link' href={'/buildings'} onClick={handleCancel}>Binolar</Link>
            <BuildinsSelect />
          </div>

          <Link className='link' href={'/schedule'} onClick={handleCancel}>Dars jadvali</Link>

          {role === 'admin' && (
            <Link className='link' href={'/users'} onClick={handleCancel}>Foydalanuvchilar</Link>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <Settings>
              {role === 'guest' ? <Login /> : <UserProfile />}
            </Settings>

            <span className='dark_icon' onClick={replaseThema}>
              {dark ? <MdDarkMode  fontSize={28} /> : <CiLight  fontSize={28} />}
            </span>
          </div>
        </ModalMenuContent>
      </Modal>

      <GlobalModalStyle />
    </Container>
  );
}

export default Navbar;
