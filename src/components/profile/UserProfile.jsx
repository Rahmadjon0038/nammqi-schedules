import { useState } from 'react';
import {
  Container, ImgContainer, UserInfoContainer, UserInfo,
  CustomInput, CustomButton, ReplacePass, ConfarimpassTitle,
  Logoutbtn, DeleteAccount, ModalContent, Glass, Overlay, ModalBox
} from './style';
import { FaAngleDown } from "react-icons/fa";
import { Box, Modal } from '@mui/material';
import Cookies from 'js-cookie'
import avatar from '../../assets/user.png'
import Image from 'next/image';
import { useAuth } from '@/context/authContext';
import {
  useComparePass, useDeleteaccount,
  usePasswordchange, useUpdateUser
} from '@/hooks/users/useUpdateProfile';
import { useRouter } from 'next/navigation';

function UserProfile() {
  const updateMutation = useUpdateUser();
  const [edit, setEdit] = useState(true)
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { role, setRole, userMeData } = useAuth()
  const router = useRouter();

  const style = {
    position: 'absolute',
    top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'transparent',
    boxShadow: 24,
    borderRadius: '10px',
    minHeight: '400px',
    overflow: "hidden",
    outline:"none"
  };

  const [userUpdate, setUserUpdate] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });

  const onchange = (e) => {
    let { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value })
  }

  const saveUpdate = () => {
    setEdit(!edit)
    updateMutation.mutate(userUpdate)
  }

  const comparemutation = useComparePass();
  const [confarimpass, setConfarimPass] = useState('')

  function passFunk() {
    let respass = confarimpass.trim()
    if (respass.length !== 0) {
      comparemutation.mutate(respass)
      setConfarimPass('')
    }
  }

  const passowordChangeMutation = usePasswordchange()
  const [changePassdata, setChangePassdata] = useState({
    oldPassword: "",
    newPassword: ""
  })

  const onchagePass = (e) => {
    let { name, value } = e.target
    setChangePassdata({ ...changePassdata, [name]: value })
  }

  const changePassoword = () => {
    passowordChangeMutation.mutate(changePassdata)
    setChangePassdata({ oldPassword: "", newPassword: "" })
  }
  const logout = () => {
    Cookies.remove('role')
    Cookies.remove('token');
    Cookies.remove('refresh_token')
    setRole('guest')
    router.push('/')
  }

  const deleteaccountmutation = useDeleteaccount();

  const deleteAccount = () => {
    deleteaccountmutation.mutate();
    setIsModalOpen(false);
    router.push('/')

  };

  // 93 670 88 69

  return (
    <Container>
      <ImgContainer onClick={() => { setOpen(true); setEdit(true); }}>
        <Image src={avatar} alt="avatar" />
        <p>{userMeData?.username}</p>
        <FaAngleDown />
      </ImgContainer>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Glass />
          <ModalContent>
            <div className='profileimg'>
              <div className='info'>
                <Image className='img' src={avatar} alt="avatar" />
                <div className="infotext">
                  <h2>{userMeData?.firstname} {userMeData?.lastname}</h2>
                </div>
              </div>
              {edit ? (
                <button onClick={() => setEdit(false)}>Yangilash</button>
              ) : (
                <button onClick={saveUpdate}>Saqlash</button>
              )}
            </div>

            <UserInfoContainer>
              <UserInfo>
                <div className='userInfo'>
                  <p className='title'>Ismi</p>
                  <div className='userInput'>
                    {edit ? <p>{userMeData?.firstname}</p> :
                      <CustomInput onChange={onchange} name="firstname" type="text" defaultValue={userMeData?.firstname} />}
                  </div>
                </div>

                <div className='userInfo'>
                  <p className='title'>Familiya</p>
                  <div className='userInput'>
                    {edit ? <p>{userMeData?.lastname}</p> :
                      <CustomInput name='lastname' onChange={onchange} type="text" defaultValue={userMeData?.lastname} />}
                  </div>
                </div>

                <div>
                  <ConfarimpassTitle>Parolni Almashtirish</ConfarimpassTitle>
                  <ReplacePass>
                    <CustomInput onChange={onchagePass} name='oldPassword' value={changePassdata.oldPassword} placeholder="Eski parol" />
                    <CustomInput onChange={onchagePass} name='newPassword' value={changePassdata.newPassword} placeholder="Yangi parol" />
                    <CustomButton onClick={changePassoword}>Yuborish</CustomButton>
                  </ReplacePass>
                </div>
              </UserInfo>

              <UserInfo>
                <div className='userInfo'>
                  <p className='title'>Foydalanuvchi nomi</p>
                  <div className='userInput'>
                    <p>{userMeData?.username}</p>
                  </div>
                </div>

                <div className='userInfo'>
                  <p className='title'>Email</p>
                  <div className='userInput'>
                    <p>{userMeData?.role}</p>
                  </div>
                </div>

                <div>
                  <ConfarimpassTitle>Parolni tekshirish</ConfarimpassTitle>
                  <ReplacePass>
                    <CustomInput onChange={(e) => setConfarimPass(e.target.value)} value={confarimpass} placeholder="Parolingizni kiriting" />
                    <CustomButton onClick={passFunk}>Tekshirish</CustomButton>
                  </ReplacePass>
                </div>
              </UserInfo>
            </UserInfoContainer>

            <Logoutbtn onClick={logout}>Accountdan Chiqish</Logoutbtn>
            <DeleteAccount onClick={() => setIsModalOpen(true)}>Akauntini butunlay o'chirib tashlash</DeleteAccount>
          </ModalContent>
        </Box>
      </Modal>

      {/* Custom Delete Modal */}
      {isModalOpen && (
        <Overlay>
          <ModalBox>
            <h3 style={{ color: "red" }}>Eslatma</h3>
            <p>Accountni o‘chirsangiz barcha ma’lumotlar o‘chib ketadi. Qayta tiklash imkoni bo‘lmasligi mumkin.</p>
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
              <CustomButton onClick={() => setIsModalOpen(false)}>Bekor qilish</CustomButton>
              <CustomButton onClick={deleteAccount}>Tasdiqlash</CustomButton>
            </div>
          </ModalBox>
        </Overlay>
      )}
    </Container>
  )
}

export default UserProfile;
